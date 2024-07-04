---
title: FRC 2023 Telescoping Arm
summary: A super quick telescoping arm for an FRC Robot
date: 2023-04-01
type: project
math: false
tags:
  - FRC
image:
  caption: 'FRC 2023 Telescoping Arm'
---
In high school, I was part of an award winning [FIRST Robotics Competition](https://www.firstinspires.org/robotics/frc) team. [Team 3476: Code Orange](https://www.teamcodeorange.com/). In the 2023 season, I designed a belt-driven telescoping "arm" that could extend up to 19 inches in 0.5 seconds.

Here is our reveal video:

{{< youtube CvMuQAEPYbs >}}

## Prototyping
Each season starts with prototyping, and I experimented with lots of different mechanisms for this telescope. One of them used a constant force spring for extension:
{{< video src="arm3-prototype.mp4" controls="yes" >}}
We eventually decided against this design because although it is fast, it only allows the telescope to be fully extended or fully retracted, with no in-between positions. We required that the system have precise extension, extend and retract in less than a second, and be lightweight.

### Design
After debating on constant force springs, lead screws, and pneumatic cylinders, I decided on a belt-drive design. With this, I had to figure the very complex geometry for this robot. Let's just say, given the constraints of the robot size and the desired extension, I really learned how to make good sketches.
![Arm Sketch](arm3-sketch.jpg)

Some other highlights of this design include the see-through pocketing (which took me almost 5 straight hours one night!)
![Pocketing](arm3-pocketing.jpg)
And a fish, for fun!
![Fish](arm3-fish.jpg)

## Manufacturing
I directed the manufacturing of this arm, making all the drawings for parts, giving them to the manufacturing team, and keeping track of a manufacturing list. Here are some photos of the process:
![3D Printed Parts](arm3-printed-parts.jpg)
![Drawing](arm3-drawing.jpg)
![Arm on Robot](arm3-on-robot.jpg)
![Final Build](arm3-final-build.jpg)
![Final Robot](arm3-final-on-robot.jpg)

## Competition - Pit Crew!
At competition, I was selected to be on the 6-man pit crew because of my dedication and expertise in robot design. My experience there was intense, to say the least. When the robot came back all broken from a match, we would have a few minutes to fix it up before the next match. Stress was intense, communication was key, and time was always running out. Through this experience, I learned how to analyze and check mechanisms very quickly, work very effectively with my pit crew mates, and how to screw a bolt in fast! That 2023 Season, Code Orange made it to the Einstein Field, where the top 24 teams out of thousands in the world compete for the top spot.

![Full Robot](arm3-full-robot.jpg)