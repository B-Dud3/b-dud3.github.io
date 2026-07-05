---
title: Methane-Seeking Unmanned Ground Vehicle
summary: An autonomous UGV that hunts down methane sources — published in IEEE.
cover: ./cover.png
coverAlt: Top-down view of the UGV showing the GPS module, Pixhawk flight controller, and Raspberry Pi mounted on an orange acrylic plate
tags: [Raspberry Pi, Pixhawk, Arduino, Python, CAD, Sensors]
date: 2025-08-01
featured: true
---

## Why

Due to environmental concerns, the need for autonomous, hands-off methane
detection has skyrocketed. Manual leak surveys are slow, costly, and keep
people near the hazard.

## What

This UGV autonomously seeks methane sources using an EMGR-based
(empirical observability Gramian) algorithm paired with a methane sensor,
Raspberry Pi, Pixhawk flight controller, GPS, and Arduino Uno.

Built at the UC Merced MESA Lab, the platform combines:

- **Modular sensor housings** and mounting architecture that allow rapid
  payload swaps and dependable outdoor operation.
- **A two-phase waypoint algorithm** — an area-enclosing sweep followed by
  concentration-guided convergence on the source.
- **Full-stack integration** of the mechanical, electrical, and software
  subsystems into one cohesive autonomous platform.

## Publication

*A low-cost autonomous diffusing gas source detection system with a UGV and
empirical observability Gramian* — IEEE (published).
