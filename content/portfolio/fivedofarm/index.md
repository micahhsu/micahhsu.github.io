---
title: 5 DoF Robotic Arm
summary: Five degree of freedom robotic arm for my college's Mars rover team
date: 2023-06-01
type: project
math: false
tags:
  - University Rover Challenge
image:
  caption: '5 DoF Robotic Arm'
---

I built a 5 degree of freedom robotic arm for [SC Robotics](https://saddlebackcollegerobotics.com/), my college mars rover team, competing in the [University Rover Challenge](https://urc.marssociety.org/home). The design was based on a previous generation arm, but I revised the structure and designed a brand new end effector.

First, a video (0:45 for the arm):

{{< youtube SAtsOZK6AJ4 >}}

## Design
### Previous Design
![Old Arm](arm2-old-arm.jpg)
This design was based very heavily on my team's previous robotic arm, pictured above. However, we wanted to make the structure more rigid and lightweight. And, we needed a new end effector, since the previous one had failed to grip things linearly.

### Structure
I decided to reconstruct the frame out of Garolite composite fiberglass while making a box-like structure instead of the standoffs we had used before. This is what it looked like:
![Arm Cross Section](arm2-forearm-cross-section.jpg)

### End Effector and Wrist
The previous year's arm had used a worm gear end effector, but because of gear wear and tear, it no longer pinched objects at the fingertips (similar to a worn out pair of pliers). To avoid this, I designed a brand new lead-screw driven end effector. 
![End Effector Design](arm2-end-effector-design.jpg)
Also, the previous year's "wrist" was very complicated with tons of different gears, so I decided to redesign it with a simple and brand new wrist.
![Wrist](arm2-wrist.jpg)

## Manufacturing
This project was my first exposure to such a saturated level of manufacturing. I manufactured almost all of the components on this arm using a CNC router, 3D printers, and other machines like bandsaws and drill presses. Here are a few images of the process:
![Arm Plates](arm2-plates.JPG)
![Arm Plates3](arm2-plates3.JPG)
![Arm Plates4](arm2-plates4.jpg)
![Arm L Brackets](arm2-l-brackets.jpg)
![End Effector](arm2-end-effector-first.jpg)
![Forearm](arm2-forearm.jpg)
![Arm First Build](arm2-first-build.jpg)
![End Effector](arm2-end-effector.jpg)

Here are some videos:
{{< video src="arm2-end-effector-grip.mp4" controls="yes" >}}
{{< video src="arm2-gear-series.mp4" controls="yes" >}}

## Competition
After our Systems Acceptance Review, we were admitted to the final competition in Utah! In this competition there were two missions: the Extreme Retrieval Mission, a long-range task requiring object retrieval of large objects, and the Equipment Servicing Mission, a short-range but very precise and dexterous task.

Here's a nice glory picture from the Extreme Retrieval Mission (unfortunately, our drive train got stuck on a rock. But we had better luck next year!)
![Extreme Retrieval](arm2-extreme-retrieval.jpg)

Here are some images from the Equipment Servicing Mission (13th place!):
![Equipment Servicing](arm2-equipment-servicing.jpg)
![Equipment Servicing](arm2-equipment-servicing2.jpg)
![Equipment Servicing](arm2-equipment-servicing3.JPG)
![Equipment Servicing](arm2-equipment-servicing4.jpg)