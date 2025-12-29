---
layout: post
title: 5 DoF Robotic Arm
#description:  Five degree of freedom robotic arm for my college's Mars rover team
#skills: 
#- skill 1
#- skill 2
main-image: /thumbnail.png
---

In 2023, I built a 5 degree of freedom robotic arm for [SC Robotics](https://saddlebackcollegerobotics.com/), my college mars rover team, competing in the [University Rover Challenge](https://urc.marssociety.org/home). The design was based on a previous generation arm, but I revised the structure and designed a brand new end effector.

First, a video (0:45 for the arm):

<iframe width="1201" height="510" src="https://www.youtube.com/embed/SAtsOZK6AJ4" title="Saddleback College Robotics URC SAR 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---
# Design
## Previous Design
{% include image-gallery.html images="arm2-old-arm.jpg" %}
My design was based heavily on my team's previous robotic arm, pictured above. However, we wanted to make the structure more rigid and lightweight. We also needed a new end effector, since the previous one failed to grip objects linearly.

## Structure
I decided to reconstruct the frame out of Garolite composite fiberglass to save weight. I also incorporated a box structure instead of the standoffs we used before, increasing rigidity.
{% include image-gallery.html images="arm2-forearm-cross-section.jpg" %}

## End Effector and Wrist
The previous arm used a worm gear end effector, but because of the worn gears, it no longer pinched objects at the fingertips, similar to a worn out pair of pliers. To prevent this, I designed a new lead-screw-driven end effector. 
{% include image-gallery.html images="arm2-end-effector-design.jpg" %}
The previous year's "wrist" was also very complicated with tons of different gears, so I redesigned a simpler new wrist with far fewer components.
{% include image-gallery.html images="arm2-wrist.jpg" %}

# Manufacturing
I manufactured almost all of the components on this arm using a CNC router, 3D printers, and other machines like bandsaws and drill presses.
{% include image-gallery.html images="arm2-plates.JPG, arm2-plates3.JPG, arm2-plates4.jpg, arm2-l-brackets.jpg, arm2-end-effector-first.jpg, arm2-forearm.jpg, arm2-first-build.jpg, arm2-end-effector.jpg" %}

Here are some videos:

<video width="75%" controls autoplay muted loop>
  <source src="/projects/5dof-arm/arm2-end-effector-grip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<video width="75%" controls autoplay muted loop>
  <source src="/projects/5dof-arm/arm2-gear-series.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Competition
After our Systems Acceptance Review, we were admitted to the final competition in Utah. In this competition, there were two missions using the arm: the Extreme Retrieval Mission, a long-range task requiring retrieval of large objects, and the Equipment Servicing Mission, a short-range but very precise task.

Here is a picture from the Extreme Retrieval Mission (unfortunately, our drive train got stuck on a rock... we had better luck the next year)
{% include image-gallery.html images="arm2-extreme-retrieval.jpg" %}

Here are some images from the Equipment Servicing Mission (13th place!):
{% include image-gallery.html images="arm2-equipment-servicing.jpg, arm2-equipment-servicing2.jpg, arm2-equipment-servicing3.JPG, arm2-equipment-servicing4.jpg" %}