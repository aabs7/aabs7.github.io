---
layout: project
title: "Motion planning in unseen environments"
description: "A hierarchical planning framework for complex robot navigation that combines machine learning with dynamics-aware motion planning."
image: "/papers/PMEM.gif"
tags: ["motion planning", "navigation", "planning", "learning", "vehicle dynamics", "uncertainty", "robotics"]
pinned: false
---

Navigating a robot through an unknown, cluttered environment is a fundamental challenge in robotics. This challenge is significantly amplified when the robot's own physical limitations—its **dynamics**—restrict how it can move. A narrow opening might be easily traversable for a small circular robot, but an impossible hurdle for a long, snake-like vehicle with multiple trailers.


{% include figure.html
    path="/papers/PMEM.gif"
    caption="Fig 1: Motion planning for a vehicle with dynamics in unknown environment." %}

This project presents a hierarchical planning framework that combines high-level reasoning about unknown space with low-level, dynamically-feasible motion planning. It integrates the research from two of my papers: **"Guided Sampling-Based Motion Planning with Dynamics in Unknown Environments"** and **"Learning-informed Long-Horizon Navigation under Uncertainty for Vehicles with Dynamics"**.

## The Challenge: Dynamics and Uncertainty

Most traditional navigation algorithms assume that any unseen part of the world is unoccupied (the "optimistic assumption"). While this works for simple robots, it often leads robots with complex dynamics into "traps"—narrow corridors or tight turns where they get stuck or are forced to perform time-consuming maneuvers.

To navigate effectively, the robot must be able to:
1.  **Plan locally:** Find a smooth, collision-free path that respects its steering and velocity limits.
2.  **Reason globally:** Predict which unexplored regions are most likely to lead to the goal, considering its own physical constraints.

## Hierarchical Planning Architecture

Our approach breaks the problem into two distinct but tightly integrated levels:

### 1. Low-Level: Guided Sampling-Based Motion Planning
The low-level planner, introduced in our CASE 2023 paper, is responsible for finding the actual "how-to-move" trajectory. It uses a sampling-based approach (building a tree of possible motions) but guides this search using:
-   **Adaptive Grid Subdivision:** A discrete layer that identifies the most promising directions toward the goal.
-   **Solution Reuse:** During replanning, it leverages parts of previous successful plans to maintain consistency and reduce computation time.

### 2. High-Level: Learning-Informed Navigation (LSP)
The high-level planner, detailed in our IROS 2024 paper, uses the **Learning over Subgoals Planning (LSP)** abstraction. It identifies "frontiers"—boundaries between known and unknown space—and treats them as subgoals.

Crucially, we use **Machine Learning** (a Convolutional Neural Network) to predict three key properties for each frontier:
-   **Probability of Success ($P_S$):** How likely is this route to lead to the goal?
-   **Success Cost ($R_S$):** How far is it to the goal through this route?
-   **Exploration Cost ($R_E$):** If the route is a dead-end, how much will we "waste" exploring it?

By training these models on the specific robot's dynamics, the planner learns to avoid "tight" spaces that might be okay for a simpler robot but are risky for its own body.

## Results: Reliability and Efficiency

Our experiments with car-like and multi-trailer "snake" robots in complex, office-like environments demonstrated the power of being dynamics-aware:
-   **Higher Reliability:** Significantly fewer instances of getting stuck compared to non-learned or dynamics-unaware baselines.
-   **Lower Navigation Cost:** The robots reach their goals faster by choosing "easier" routes that better suit their physical capabilities.

| Model | Success Rate | Average Cost |
| :--- | :--- | :--- |
| Non-learned (Optimistic) | 90% | 389.5m |
| LSP (Dynamics-Aware) | **96%** | **280.5m** |

*Table: Performance comparison for a snake-like robot in a challenging "Three Hallway" environment.*

## Publications

-   **Abhish Khanal**, Hoang-Dung Bui, Gregory J. Stein, and Erion Plaku. ["Guided Sampling-Based Motion Planning with Dynamics in Unknown Environments."](/papers/Motion_Planning.pdf) *IEEE International Conference on Automation Science and Engineering (CASE)*, 2023.
-   **Abhish Khanal**, Hoang-Dung Bui, Erion Plaku, and Gregory J. Stein. ["Learning-informed Long-Horizon Navigation under Uncertainty for Vehicles with Dynamics."](/papers/LSP_Dynamics.pdf) *IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*, 2024.
