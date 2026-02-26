---
layout: project
title: "Motion planning in unseen environments"
description: "A hierarchical planning framework for complex robot navigation that combines machine learning with dynamics-aware motion planning."
image: "/assets/images/projects/PMEM.gif"
tags: ["motion planning", "navigation", "planning", "learning", "vehicle dynamics", "uncertainty", "robotics"]
pinned: false
---

Navigating a robot through an unknown, cluttered environment is a fundamental challenge in robotics. This challenge is significantly amplified when the robot's own physical limitations---its dynamics---restrict how it can move. A narrow opening might be easily traversable for a small holonomic robot, but it will be difficult for a long, snake-like vehicle with multiple trailers.

{% include figure.html
    path="assets/images/projects/intro_dynamics.png"
    width="50%"
    caption="Fig 1: Dynamics-aware planning to avoid poor routes to the goal under uncertainty." %}


## The challenge: dynamics and uncertainty
Traditional motion planning for robots often assumes a complete map. But in the real world, especially for autonomous robots operating in unfamiliar spaces (like search-and-rescue or delivery robots), the robot only gradually discovers the environment using sensors.
When obstacles are revealed during movement, the robot has to replan its path again and again. This repeated replanning slows down the robot, and can make its path look jerky or inefficient.
While this works for simple robots, it often leads robots with complex dynamics into narrow corridors, sharp turns, or dead-ends where they are forced to perform time-consuming maneuvers, or worse get stuck.
{% include figure.html
    path="assets/images/projects//PMEM.gif"
    caption="Fig 2: Low-level motion planning for a vehicle with dynamics in unknown environment." %}
To navigate effectively, the robot must be able to:
1.  **Plan locally:** Find a smooth, collision-free path that respects its steering and velocity limits.
2.  **Reason globally:** Predict which unexplored regions are most likely to lead to the goal, and avoid tight corners where it might get stuck,  considering its own physical constraints.

Using this hierarchical planning where local planning computes trajectory and cost associated for different vehicles, and high-level planner leverages those cost and uses learning to decides where the robot should navigate results in dynamically-aware planning under uncertainty.

The paper {% cite khanal2023guided %} introduces a low-level planner that computes smooth, dynamically feasible trajectories in unknown environments with faster replanning compared to approaches such as RRT and GUST.
Building on this work, {% cite khanal2024dynamics %} demonstrates how the low-level planner can be integrated into a higher-level reasoning framework. This hierarchical approach enables vehicles with complex dynamics to make informed decisions under uncertainty, guiding them away from narrow dead ends or tight corners under uncertainty.

Check out these papers for more details.

## Reference
{% bibliography -f papers --cited --template bib_simple %}
