---
title: 6 DoF Robotic Arm
summary: Next generation robotic arm for my college's Mars rover team.
date: 2024-06-01
type: project
math: false
tags:
  - University Rover Challenge
image:
  caption: '6 DoF Robotic Arm'
---

I built a 6 degree of freedom robotic arm for [SC Robotics](https://saddlebackcollegerobotics.com/), my college mars rover team, competing in the [University Rover Challenge](https://urc.marssociety.org/home). Leading it from design to the field, it was a tremendous success.

This arm is the most difficult and time-consuming project that I have ever attempted, but also the most rewarding. The requirements were mechanically and electrically challenging, and the design and implementation required countless iterations.

First, a video (1:23 for the arm):

{{< youtube 2kkPbTSSpe0 >}}

## Design
### Overall Design
![Arm Screenshot](arm-screenshot.png)
Looking back to the robotic arm I designed in the previous year, I realized that it lacked mobility. With only five degrees of freedom, the two most important axes had limited rotational range. To increase mobility, this new arm would have six degrees of freedom with a brushless motor and gearbox at every axis, eliminating the linear actuators and brushed motors we had used before. The design was inspired by one that a previous team member had modeled.

### Electronics
![Arm Motor](arm-motor.jpg)
![Arm Calculations](arm-calculations.png)
The electronics essentially consisted of a fusebox, buck converter, motors, motor drivers, and cameras. I chose a 24V system, an upgrade from the previous 12V system, allowing higher torque density and cooler thermals. For the motors, I selected 24V brushless motors for a greater precision and efficiency despite more difficult controls. To spec the correct motors, I created a spreadsheet ballparking the torque required for each axis, leading to the selection of several EC Flat Maxon motors, which worked great.

### Gearboxes
![Cycloidal Drive GIF](arm-cycloidal-drive.gif)
![Cycloidal Drive](arm-cycloidal-drive.png)
Each axis comprised a motor and a gearbox to produce the right amount of torque. I used strain wave gearboxes at the first three axes, which sustain the highest moment, and I used custom cycloidal gearboxes for the final three axes. These gearboxes were designed by a previous member but never successfully prototyped. I revised and tested them.

### Materials
![Arm Tube FEA](arm-tube-fea.png)
![Forearm](arm-forearm.png)
For the materials selection, I considered that my machining capability consisted of a CNC router and 3D printers, along with other simple machines like bandsaws, drill presses, and bench grinders. Consequently, I chose a 6061-T6 aluminum frame, making it light, sturdy, and machinable. I performed FEA on structural parts to ensure safety under expected loads.

## Manufacturing
I did most of the manufacturing and assembly for this arm, and it took me a couple months. Here are a couple images of the build!
![Arm 3D Printing](arm-3d-printing.jpg)
![Arm Machining](arm-machining.jpg)
![Arm Plates](arm-plates.jpg)
![Arm Plates2](arm-plates2.jpg)
![Arm Assembly](arm-assembly.JPG)
![Arm Cycloidal Drive](arm-cycloidal-drive.png)
![Arm Bicep](arm-bicep.jpg)
![Arm Bicep Comparison](arm-bicep-comparison.jpg)
![Arm First Build](arm-first-build2.jpg)
![Arm with Wires](arm-with-wires.jpg)
![Arm on Rover](arm-on-rover.jpg)

## Testing
During testing, there were two critical failures that happened. 

First, one of the motors I chose proved to be too weak at the highest load axis. Solution? Bigger motor! And, bigger gearbox.

Second, the structural member at the highest load axis fractured because I frankly did not think hard enough about that design. I had suspected that it would break, but left the problem for later. It was a carbon-fiber nylon 3D printed part, but the orientation of the print made it very weak, and a 3D print was nowhere strong enough for this application. Solution? Design some parts out of metal.

![Arm Broken Shoulder](arm-broken-shoulder.jpg)

After those fixes, we were able to get out and start testing. We had several testing runs, but my favorite was carrying this lantern after sunset:
![Arm with Lantern](arm-lantern.jpg)

Finally, here's a picture of this arm beside the arm I designed last year!
![Arm Comparison](arm-mask-photo.jpg)

## Competition
After acceptance into the final competition in Utah for the University Rover Challenge, the rover competed in two missions that involved the arm: the Delivery mission, a long range and intensive task involving search and delivery of heavy objects, and the Equipment Servicing Mission, a mission involving precise movements.

Here are some images from the Delivery Mission:
![Arm Delivery](arm-delivery.jpg)
![Arm Delivery2](arm-delivery2.jpg)
![Arm Delivery3](arm-delivery3.jpg)

Here are some images from the Equipment Servising Mission:
![Arm Equipment Servicing](arm-equipment-servicing.jpg)
![Arm Equipment Servicing2](arm-equipment-servicing2.jpg)
![Arm Equipment Servicing3](arm-equipment-servicing3.jpg)

## Conclusion
I learned so much from this project, and what I've talked about here is just a very brief overview. It was so much fun to carry this from design to final performance!