---
layout: post
title: FRC 2022 Hopper
#description:  A ball control "hopper" system for an FRC Robot
#skills: 
#- skill 1
#- skill 2
main-image: /thumbnail.png
---

In high school, I was part of an award winning [FIRST Robotics Competition](https://www.firstinspires.org/robotics/frc) team, [Team 3476: Code Orange](https://www.teamcodeorange.com/). In the 2022 season, I designed a "hopper" that delivered balls from the bottom of the robot to a shooter at the top using polycord.

Here's our reveal video from that year:

<iframe width="1201" height="510" src="https://www.youtube.com/embed/sENzTtd2u-4" title="Team 3476: Code Orange 2022 - Robot Reveal &quot;Eclipse&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---
# Prototyping
After determining a basic robot concept and napkin sketch for the hopper, we prototyed the hopper. Here's an image I found buried within the team Slack:
{% include image-gallery.html images="hop-prototype.jpg" %}

# Design
Everything I learned from prototyping, including travel distance, travel speed, ideal compression, and design concept, I carried into the design phase. This was my first time using SolidWorks, so I spent hundreds of hours crunching out the design in the first few weeks of the build season. Nevertheless, it was tons of fun.

This layout sketch helped me map out the hopper.
{% include image-gallery.html images="hopper-sketch.jpg" %}

Central to the design were polycarbonate rollers with polyurethane cords that acted as belts to drive all the rollers in the system. They were held in place by rubber tubing.
{% include image-gallery.html images="hop-rollers.jpg" %}

I also experimented with making an exploded view for my design:
{% include image-gallery.html images="hop-exploded.png" %}

# Manufacturing
During the manufacturing phase, I managed a parts tracker and learned how to make drawings for the manufacturing team. Once all the parts had been fabricated, I led the assembly for the subsystem!
<!--![Drawing](hop-drawing.jpg)-->
We had the side plates outsourced for waterjetting.
{% include image-gallery.html images="hop-waterjet.jpg" %}
Here are a few pictures of the beginning of the assembly:
{% include image-gallery.html images="hop-first-build.jpg, hop-comparison.jpg" %}
Here are a few pictures of the final build:
{% include image-gallery.html images="hop-final-build.jpg, hop-ball-in.jpg" %}
And a video of it working!
<video width="75%" controls autoplay muted loop>
  <source src="/projects/frc-hopper/hop-function.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Competition
After our first regional competition (which we won!), we had a problem: balls were flying out of the hopper when we didn't want them to. And sometimes, we would intake the wrong color ball (there are two colors of balls on the field, and we were only supposed to shoot one color). The problem is pictured below:
{% include image-gallery.html images="hop-eject-concept2.jpg" %}

I revised the design so that we could eject balls we didn't want, and make sure we were holding on to the ones we did want. This is what I came up with:
{% include image-gallery.html images="hop-eject-mechanism.png, hop-eject-build.jpg" %}

And here it is working!
<video width="100%" controls autoplay muted loop>
  <source src="/projects/frc-hopper/hop-eject.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

With this and many other improvements, we won our next regional, advancing to the world championship and placing high in our division.

{% include image-gallery.html images="hop-full-robot.jpg" %}