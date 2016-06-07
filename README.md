Interactive VonNeumman Architecture
===================================
## Table of Contents
* [Quick start](#quick-start)
* [Description](#description)
  * [Goal](#goal)
  * [Resources](#resources)
  * [Challenges](#challenges)
  * [How](#how)
* [Documentation](#documentation)
* [Contributors](#contributors)

## Quick start
* Click [here](http://tscott8.github.io/VNAness) to access the demo
* Or download the source code and use it locally

## Description
> ### Goal
_Most people view a computer as a magic black box that pulls up Google, Twitter, and Facebook._

>![alt text][img1]  
The goal of this project is to create a 3D interactive model of the inside of a laptop. Another goal of this project is to create a viable teaching tool for exploring and explaining the integral parts of the modern computer

>### Resources
* [`WebGL`](https://en.wikipedia.org/wiki/WebGL) uses web browser to access local graphics hardware acceleration
* [`Three.js`](https://github.com/mrdoob/three.js) framework, interface with WebGL
* [`Dat.GUI`](https://github.com/dataarts/dat.gui) framework, interface with Three.js
* [`Blender`](https://www.blender.org/created/textured) suite of tools, build 3D models

>![alt text][img2]  

>### Challenges
1. Creating/combining models and textures in `blender`
2. Loading `.obj` + `.mtl` files into the scene
3. Positioning the parts, then adding them to one full object
4. Setting up the orbiting camera, lights and scene
5. Expansion of the individual parts
6. GUI Controls to handle expansion, reset, zoom, etc.
7. Object selection on mouse click using raycasting
8. Displaying descriptions based on the selection
9. Highlighting the selected objects texture
10. Animating selected objects

>![alt text][img3]  

>### How
>The Three.js framework provides key tools for setting up a 3D scene. We took advantage of key components (cameras, lights, and object loaders) to populate the scene with our 3D models and add the lighting. This framework took care of panning and zooming based on the mouse movements and button presses. However, mouse clicks and highlighting the clicked part were troublesome to correctly implement.
The selecting feature was by far the most challenging problem we solved. It was especially hard to visualize a 2d mouse interacting with 3d space. We solved this problem by shooting (projecting) a ray from the mouse click location, in relation to the camera location, into 3d space. Whatever that ray intersects with, is selected.

>![alt text][img4]  

## Documentation
<tbd>

## Contributors
1. [Tyler Scott](https://github.com/tscott8)
2. [Shem Sedrick](https://github.com/ssedrick)
3. [Seth Childers](https://github.com/sethchilders92)

[img1]:/images/1.png "screenshot 1"
[img2]:/images/2.png "screenshot 2"
[img3]:/images/3.png "screenshot 3"
[img4]:/images/4.png "screenshot 4"
