---
layout: project
title: "Project 1: Robotic Exploration 2"
image: "https://picsum.photos/seed/project1/600/400"
tags: ["Robotics", "Multi-robot Navigation", "AI", "Tag1", "Task and Motion Planning", "Uncertainty"]
---

# Project 1: Advanced Robotic Exploration

This project explores cooperative navigation for multiple robots in unknown environments.

## Mathematical Formulation

The robot's state transition is modeled by the following equation:

$$
x_{t+1} = f(x_t, u_t) + w_t
$$

Where $w_t \sim \mathcal{N}(0, Q)$ represents the process noise. We aim to minimize the cost function:

$$
J = \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t R(x_t, u_t) \right]
$$

## System Architecture

![Robotic System Architecture](https://picsum.photos/seed/arch/800/400)
*Figure 1: High-level overview of the cooperative navigation framework.*

## Exploration Progress

We use occupancy grids to track exploration progress over time.

![Occupancy Grid Mapping](https://picsum.photos/seed/map/800/400)
*Figure 2: Real-time mapping and path planning in a cluttered environment.*

## Methodology
1. **Perception**: Extracting features from LiDAR data.
2. **Planning**: Distributed trajectory optimization.
3. **Execution**: Low-level PID control for motor synchronization.
