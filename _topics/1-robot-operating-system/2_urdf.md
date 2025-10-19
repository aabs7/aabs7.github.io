---
layout: post
subchapter: 2
title: "URDF, Robot Description, and Robot State Publisher"
date:  2025-10-03
---

# URDF, Robot Description, and Robot State Publisher

URDF (Unified Robot Description Format) is an XML file that lets you define your entire robot’s physical structure—its parts and how they’re connected—in one place. This automates the creation of TF tree you just built manually with individual commands. Instead of running multiple commands in multiple terminals to define each relationship, you describe the whole robot in one file and use a single ROS2 node to *broadcast* all its transforms at once using robot state publisher.

The components of URDF for tf2 are:

- `<link>` : A link represents physical part of your robot (like a wheel, a sensor, or a chassis). Each `<link>` becomes a frame in your TF tree.
- `<joint>`: A joint connects two links together. It defines the relationship between them, including their offset and how they can move. Each `<joint>` becomes a transform in your TF tree.

For static models, we use a `fixed` joint, which is the direct equivalent of the `static_transform_publisher` we used before.

ROS2 has a node called `robot_state_publisher` that does the automation for us. It reads the URDF file, finds all the `<joint>` definitions, and automatically publishes the corresponding transforms to `/tf_static` (for `fixed` joints) and `/tf` (for movable joints).



> For this part of tutorial, we use `static_transform_publisher`, that correspond to a `fixed` joint in the URDF (joints that cannot move). This allows us to “pretend” that the robot is at a fixed position so we can focus purely on learning how TF relationship are structure, how to make a URDF file to compute TF structures automatically.
We cannot make robots just with `fixed` joints (or `static_transforms`). We will use the similar concepts and learn how we can make a robot that actually moves with other *movable* joints (or `dynamic_transforms`).
>



## 1. Creating a URDF for Our Robot Arm (static)

Our robot consists of `arm_base` and `gripper`. We can create a URDF file to describe the relationship between `arm_base` and `gripper`.

Create a file named `my_arm.urdf` and paste the following content into it.

```xml
<?xml version="1.0"?>
<robot name="my_robot_arm">
	<link name="arm_base"/>
	<link name="gripper"/>

	<joint name="arm_base_to_gripper_joint" type="fixed">
		<parent link="arm_base"/>
		<child link="gripper"/>
		<origin xyz="0.5 0 0.2" rpy="0 0 0"/>
	</joint>
</robot>
```

This file describes the robot’s internal structure. It says there is a part called `gripper` that is always fixed at `(x=0.5, z=0.2)` relative to a part called `arm_base`. Exactly what we did using the `static_transform_publisher` above in Section 1.2.

## 2 Putting it all together

Let’s use URDF to build our TF tree. We’ll use two nodes:

- `robot_state_publisher`: To publish the robot’s internal transforms (`arm_base` → `gripper`).
- `static_transform_publisher`: To publish the robot’s placement in the world (`world` → `arm_base`). This is how its usually done. URDF defines the robot, and another node places it in the world.

### 2.1 Place the robot in the world:

The single command that places the robot in the `world` frame is through `static_transform_publisher`.

```xml
ros2 run tf2_ros static_transform_publisher --x 1 --y 0 --z 0 --yaw 0.785 --frame-id world --child-frame-id arm_base
```

### 2.2 Publish the robot’s internal structure:

This command starts `robot_state_publisher` node from `robot_state_publisher` package that you get when you install ROS2. You need to provide full path to your `my_arm.urdf` file (here I’ve used `cat` command so you need to be in the same directory where you saved the urdf file).

```xml
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$(cat my_arm.urdf)"
```

### 2.3 Verify the result:

We can verify if the final TF tree is same as the one we built manually using `view_frames` node.

```xml
ros2 run tf2_tools view_frames
```

![urdf and robot state publisher]({{ site.baseurl }}/assets/images/blogs/urdf_robot_state_publisher/image.png)

>
## 💡 On a side note
Now is a good time to understand what’s going on and inspect things that are happening.
If you open a terminal and type `ros2 topic list`, you can see bunch of new topics. One of them is `/robot_description`. In this topic, you can see your robot model. Simulator platforms (like gazebo) subscribes to this topic to make the robot.
`/tf`, and `/tf_static`, are published by `robot_state_publisher` to publish the transforms.
You can also see `/joint_state` topic. Nothing is publishing to `/joint_state`. I can say that because if I run `ros2 topic info /joint_state`, I can see that there are no publishers and only subscribers. The reason you can see `/joint_state` there is because `robot_state_publisher` subscribes to `/joint_state` topic, in order to move the joints according to the values published in that topic. In ROS2, a topic is listed as soon as a node declares its intent to either publish or subscriber to it.
>
