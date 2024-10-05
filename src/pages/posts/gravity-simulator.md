---
layout: '@/templates/BasePost.astro'
title: 2D Gravity Simulator
description: A post about my 2d gravity simulator.
pubDate: 2024-10-05T22:00:00Z
imgSrc: '/assets/images/2d-gravity-sim.gif'
imgAlt: '2D gravity simulator'
---

Something I find very interesting is the simulation of physics, and watch natural phenomenons appear. Gravity is one of these things, and this projects implements a simulation of the gravitational pull between objects in space.

You can clone the project from my [GitHub](https://github.com/torsteinkort/2d-gravity-sim).

### Runge Kutta 4

As the gravitational force in this context is a continuously changing value, implementing a simulation that increments at some timestep is not straight forward. I therefore finally got to use some of the math i learned at uni. Runge Kutta 4 is such an algorithm to approximate such changing forces over time, and with this implemented, the simulation was much more stable. Thank you Matte 4.
