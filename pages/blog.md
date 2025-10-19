---
layout: page
title: Blog
permalink: /blog/
---

I like to build robots and write codes to make that robot do things that I find boring to do in my everyday life. Doing robotics is fun because you get to learn about different fields (e.g., computer science, engineering, mathematics, and others), get to implement those ideas, and see it working in real life.

I am mostly interested in programming robots, and using learning (AI) to make robots 'intelligent'. In this page, I share my notes for documentation purposes, across different topics.


## Robot Operating System (ROS 2)
ROS is the most popular framework for programming robots. It provides a communication layer, tools, and libraries to help you build robot quickly. This section covers the basics you need to know in order to understand how to use ROS to make a robot, simulate it in gazebo classic, and verify it in physical hardware.

This tutorial assumes that you have set up ROS2 humble on your computer and that you have basic understanding of how ROS framework works. The best place to get familiar with ROS is its official [documentation.](https://docs.ros.org/en/humble/index.html) After the documentation, these posts might be helpful.
1. [Transforms (tf2) in ROS]({{ site.baseurl }}{% post_url 2025-10-03-ros1-transforms %})
2. [URDF, Robot Description, and Robot State Publisher]({{ site.baseurl }}{% post_url 2025-10-04-ros2-urdf-and-robot-state-publisher %})
3. [Simulating a Simple 2DoF Planar Robot Arm]({{ site.baseurl }}{% post_url 2025-10-05-ros3-simulating-2dof-arm %})

## Reinforcement Learning (RL)
Reinforcement learning (RL) is an area of machine learning where an agent learns to make decisions itself by taking actions in the environment. This is useful in robotics because we could use RL to train our robot to do tasks (say walk) by itself, rather than programming it to do so. Generally, we train an RL agent in simulation, and then transfer the learned policy to the physical robot.
Probably the best place to start learning RL is the classic [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/RLbook2020.pdf) book by Sutton and Barto. I recommend going through the first three chapters to get a good understanding of the basics and terminology used in RL. After that, these posts might be helpful.
1. [The goal of Reinforcement Learning]({{ site.baseurl }}{% post_url 2025-10-11-rl1-goal-of-rl %})

## Others
1. [A new website, and starting to write]({{ site.baseurl }}{% post_url 2025-2-11-other-a-new-website %})
