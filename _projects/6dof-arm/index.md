---
layout: post
title: 6 DoF Robotic Arm
#description:  Next generation robotic arm for my college's Mars rover team.
#skills: 
#- skill 1
#- skill 2
main-image: /thumbnail.png
---

In 2024, I built a 6 degree of freedom robotic arm for [SC Robotics](https://saddlebackcollegerobotics.com/), my college mars rover team, competing in the [University Rover Challenge](https://urc.marssociety.org/home). Leading it from design to the field, it was a tremendous success.

This arm is the most difficult and time-consuming project that I have attempted, but also the most rewarding. The requirements were mechanically and electrically challenging, and the design and implementation required countless iterations.

First, a video (1:23 for the arm):

<iframe width="1201" height="510" src="https://www.youtube.com/embed/2kkPbTSSpe0" title="Saddleback College Robotics URC SAR 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---
# Design
## Overall Design
{% include image-gallery.html images="arm-screenshot.png" %}
Looking back to the [robotic arm I designed in the previous year]({{ '/projects/5dof-arm/index' | relative_url }}), I realized that it lacked mobility. With only five degrees of freedom, the two most important axes had limited rotational range. To increase mobility, this new arm would have six degrees of freedom with a brushless motor and gearbox at every axis, eliminating the linear actuators and brushed motors we had used before. The design was inspired by one that a previous team member had modeled.

## Electronics
The electronics essentially consisted of a fusebox, buck converter, motors, motor drivers, and cameras. I chose a 24V system, an upgrade from the previous 12V system, allowing higher torque density and cooler thermals. For the motors, I selected 24V brushless motors for a greater precision and efficiency despite more difficult controls. 
{% include image-gallery.html images="arm-motor.jpg" %}

## Gearboxes
Each axis comprised a motor and a gearbox to produce the right amount of torque. I used strain wave gearboxes at the first three axes, which sustain the highest moment, and I used custom cycloidal gearboxes for the final three axes. These gearboxes were designed by a previous member but never successfully prototyped. I revised and tested them.
{% include image-gallery.html images="arm-cycloidal-drive.gif, arm-cycloidal-drive.png" %}

## Materials
For the materials selection, my machining capability consisted of a CNC router and 3D printers, along with other simple machines like bandsaws, drill presses, and bench grinders. Consequently, I chose a 6061-T6 aluminum frame, making it light, sturdy, and machinable. I performed FEA on structural parts to ensure safety under expected loads.
{% include image-gallery.html images="arm-forearm.png" %}

# Manufacturing
I did most of the manufacturing and assembly for this arm, and it took me a couple months.
{% include image-gallery.html images="arm-3d-printing.jpg, arm-machining.jpg, arm-plates.jpg, arm-plates2.jpg, arm-assembly.JPG, arm-cycloidal-drive.png, arm-bicep.jpg, arm-bicep-comparison.jpg, arm-first-build2.jpg, arm-with-wires.jpg, arm-on-rover.jpg" %}

# Testing
Testing was largely a success. It consisted of mock mission runs of picking up large objects and performing fine-tuned maneuvers. There were a few problems which required buying a new motor and machining some stronger parts, but the arm was soon running and performing as desired..

We had several testing runs, but my favorite was carrying this lantern after sunset:
{% include image-gallery.html images="arm-lantern.jpg" %}

Finally, here's a picture of this arm beside the arm I designed the previous year.
{% include image-gallery.html images="arm-mask-photo.jpg" %}

# Competition
After acceptance into the final competition in Utah for the University Rover Challenge, the rover competed in two missions that involved the arm: the Delivery mission, a long range and intensive task involving search and delivery of heavy objects, and the Equipment Servicing Mission, a mission involving precise movements. We did great in both of them.

Here are some images from the Delivery Mission (5th place):
{% include image-gallery.html images="arm-delivery.jpg, arm-delivery2.jpg, arm-delivery3.jpg" %}

Here are some images from the Equipment Servising Mission (11th place):
{% include image-gallery.html images="arm-equipment-servicing.jpg, arm-equipment-servicing2.jpg, arm-equipment-servicing3.jpg" %}