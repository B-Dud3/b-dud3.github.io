---
title: Machine Learning High-Five Counter
summary: A neural network that recognizes and counts high-fives from accelerometer data.
cover: ./cover.png
coverAlt: Arduino Uno with accelerometer wiring used to capture high-five motion data
tags: [Machine Learning, MATLAB, GoogLeNet, Arduino]
date: 2024-12-01
---

## Why

I wanted to implement machine learning and a neural network to recognize
and count my high-fives.

## What

The system pairs an Arduino Uno with an accelerometer to capture motion
data. I collected time-series accelerometer readings, transformed them into
machine-learning features, and used GoogLeNet with MATLAB transfer learning
to train a model that recognizes my high-five motion — then deployed it as
a real-time inference system that counts each high-five as it happens.
