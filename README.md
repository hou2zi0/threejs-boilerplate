- [threejs-boilerplate [Deutsch]](#threejs-boilerplate-deutsch)
  - [Three.js-Dokumentation](#threejs-dokumentation)
  - [Three.js-Kurse](#threejs-kurse)
  - [Video-Tutorials](#video-tutorials)
    - [Einführung](#einführung)
    - [Erklärung der Materialien](#erklärung-der-materialien)
    - [Texturen](#texturen)
    - [Grundständige Animation von Objekten](#grundständige-animation-von-objekten)
    - [Partikel-Systeme](#partikel-systeme)
    - [Ray casting / Objekte klickbar machen](#ray-casting--objekte-klickbar-machen)
    - [Einladen externer 3D-Modelle](#einladen-externer-3d-modelle)
  - [Tools & Websites](#tools--websites)
  - [Libraries](#libraries)
    - [Wrapper libraries für Three.js](#wrapper-libraries-für-threejs)
    - [Physik-Libraries (Schwerkraft, Kollision, …)](#physik-libraries-schwerkraft-kollision-)
    - [Partikel-Systeme](#partikel-systeme-1)
  - [Ressourcen](#ressourcen)
    - [Modelle](#modelle)
      - [STLs](#stls)
      - [Andere / multiple Formate](#andere--multiple-formate)
      - [Blender](#blender)
    - [Texturen](#texturen-1)
- [threejs-boilerplate [English]](#threejs-boilerplate-english)
  - [Three.js documentation](#threejs-documentation)
  - [Three.js courses](#threejs-courses)
  - [Suggested video tutorials](#suggested-video-tutorials)
    - [Introduction](#introduction)
    - [Materials explained](#materials-explained)
    - [Texture maps](#texture-maps)
    - [Basic animation](#basic-animation)
    - [Particle system](#particle-system)
    - [Ray casting](#ray-casting)
    - [Import external models](#import-external-models)
  - [Tools & Websites](#tools--websites-1)
  - [Libraries](#libraries-1)
    - [Wrapper libraries for Three.js](#wrapper-libraries-for-threejs)
    - [Physics](#physics)
    - [Particle systems](#particle-systems)
  - [Resources](#resources)
    - [Models](#models)
      - [STLs](#stls-1)
      - [Other / multiples](#other--multiples)
      - [Blender](#blender-1)
    - [Textures](#textures)



# threejs-boilerplate [Deutsch]

Basiert auf der Boilerplate von [https://github.com/designcourse](https://github.com/designcourse) [https://github.com/designcourse/threejs-webpack-starter](https://github.com/designcourse/threejs-webpack-starter).

Der Beispielcode in `src/script.js` enthält grundlegende Beispiele für alles was man machen will, wenn man anfängt sich mit Three.js zu beschäftigen. Der Code ist in Englisch und Deutsch kommentiert, um das Verständnis zu erleichtern und nachvollziehbar zu machen, wei Three.js grundlegend funktioniert. Ein lauffähiges Beispiel des Beispielcodes findet sich hier: [https://hou2zi0.github.io/threejs-boilerplate/dist/index.html](https://hou2zi0.github.io/threejs-boilerplate/dist/index.html). 

Die Abhängigkeiten können per NPM installiert werden:

```
npm install
```

Der lokale Entwicklungs-Server wird so gestartet:

```
npm run dev
```

Das Projekt kann in einen lauffähigen Build umgesetzt werden, dessen Dateien man in `dist` findet:

```
npm run build
```

## Three.js-Dokumentation

* [Getting started](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

## Three.js-Kurse

* [The ultimate Three.js course by Bruno Simon](https://threejs-journey.xyz/) 

## Video-Tutorials

### Einführung

* [Getting Started with THREE.JS in 2021! by DesignCourse](https://www.youtube.com/watch?v=pUgWfqWZWmM)
* [Learn Three.js while building a 3D game with physics](https://www.youtube.com/watch?v=hBiGFpBle7E) – at least the first part

### Erklärung der Materialien

* [Threejsfundamentals: Materials](https://threejsfundamentals.org/threejs/lessons/threejs-materials.html)

### Texturen

* [ThreeJS Displacement & AlphaMaps - Create a 3D Terrain! by DesignCourse](https://www.youtube.com/watch?v=2AQLMZwQpDo) – focuses on displacement / height textures and alpha maps for transparency

### Grundständige Animation von Objekten

* [Creating an Animated Phone in Three.js & Blender! by DesignCourse](https://www.youtube.com/watch?v=9UukUyXqBCg)

### Partikel-Systeme

* [Working with Three.js Particle Systems - They're AWESOME! by DesignCourse](https://www.youtube.com/watch?v=dLYMzNmILQA)

### Ray casting / Objekte klickbar machen

* [Creating Smooth Scroll & Raycasting with ThreeJS by DesignCourse](https://www.youtube.com/watch?v=U29j5NiSMVQ) – Clicking on elements and event listener likes in Three.js

### Einladen externer 3D-Modelle

* [Three.js Import Model in GLTF/GLB Format From Blender [Checkers 2]](https://www.youtube.com/watch?v=e_WC3b5Hy8Q)

## Tools & Websites

* [CPetry's normal map generator](https://cpetry.github.io/NormalMap-Online/)
* [Free PBR textures](https://3dtextures.me/)

## Libraries

### Wrapper libraries für Three.js

* [enabled3d](https://enable3d.io/) "The project enable3d offers 4 different ways. As a Standalone 3D Framework, a Physics Plugin for three.js, as a 3D Objects and Physics extension for Phaser or as a library to run Ammo.js on Node.js."
    * [Enable3D - Javascript 3D engine with physics](https://www.youtube.com/watch?v=j6nv3JIAFLk)
        * [Example Code](https://github.com/tamani-coding/enable3d-physics-examples)
* [aframe](https://aframe.io/docs/1.2.0/introduction/) "a-Frame is a web framework for building virtual reality (VR) experiences. A-Frame is based on top of HTML, making it simple to get started. But A-Frame is not just a 3D scene graph or a markup language; the core is a powerful entity-component framework that provides a declarative, extensible, and composable structure to three.js."

### Physik-Libraries (Schwerkraft, Kollision, …)

* [ammo.js physics engine](https://github.com/kripken/ammo.js)
    * See links at enabled3d above as well. 

### Partikel-Systeme

* [three-nebula particle system](https://github.com/creativelifeform/three-nebula)
    * [Intro to JavaScript 3D Physics using Ammo.js and Three.js by Blue Magnificent (2019)](https://medium.com/@bluemagnificent/intro-to-javascript-3d-physics-using-ammo-js-and-three-js-dd48df81f591)

## Ressourcen

### Modelle

#### STLs

* [Thingiverse](https://www.thingiverse.com/)
* [Scan the world: the open source museum](https://www.myminifactory.com/scantheworld/)
* [Myminifactory](https://www.myminifactory.com/)

#### Andere / multiple Formate

* [Turbosquid](https://www.turbosquid.com/de/Search/3D-Models/free)
* [Sketchfab](https://sketchfab.com/features/free-3d-models)

#### Blender

* [Beginner Modelling Chair Tutorial by Blender Guru](https://www.youtube.com/watch?v=Hf2esGA7vCc&list=PLjEaoINr3zgEL9UjPTLWQhLFAK7wVaRMR)
* [Blender Beginner Tutorial Series by Blender Guru](https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U)

### Texturen

* [3D Textures.me](https://3dtextures.me/) – Free seamless PBR textures with Diffuse, Normal, Displacement, Occlusion, Specularity and Roughness Maps.


# threejs-boilerplate [English]

Based on the boilerplate by [https://github.com/designcourse](https://github.com/designcourse) [https://github.com/designcourse/threejs-webpack-starter](https://github.com/designcourse/threejs-webpack-starter).

The example code in `src/script.js` contains examples for all the basic tasks when getting into Three.js. The code is commented throughout in English and German in order to facilitate comprehension and understanding. A life example of the code may be found here [https://hou2zi0.github.io/threejs-boilerplate/dist/index.html](https://hou2zi0.github.io/threejs-boilerplate/dist/index.html). 

Install dependencies via NPM:

```
npm install
```

Run the local development server:

```
npm run dev
```

Build the project to a standalone version in `dist`:

```
npm run build
```

## Three.js documentation

* [Getting started](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

## Three.js courses

* [The ultimate Three.js course by Bruno Simon](https://threejs-journey.xyz/) 

## Suggested video tutorials

### Introduction

* [Getting Started with THREE.JS in 2021! by DesignCourse](https://www.youtube.com/watch?v=pUgWfqWZWmM)
* [Learn Three.js while building a 3D game with physics](https://www.youtube.com/watch?v=hBiGFpBle7E) – at least the first part

### Materials explained

* [Threejsfundamentals: Materials](https://threejsfundamentals.org/threejs/lessons/threejs-materials.html)

### Texture maps

* [ThreeJS Displacement & AlphaMaps - Create a 3D Terrain! by DesignCourse](https://www.youtube.com/watch?v=2AQLMZwQpDo) – focuses on displacement / height textures and alpha maps for transparency

### Basic animation

* [Creating an Animated Phone in Three.js & Blender! by DesignCourse](https://www.youtube.com/watch?v=9UukUyXqBCg)

### Particle system

* [Working with Three.js Particle Systems - They're AWESOME! by DesignCourse](https://www.youtube.com/watch?v=dLYMzNmILQA)

### Ray casting

* [Creating Smooth Scroll & Raycasting with ThreeJS by DesignCourse](https://www.youtube.com/watch?v=U29j5NiSMVQ) – Clicking on elements and event listener likes in Three.js

### Import external models

* [Three.js Import Model in GLTF/GLB Format From Blender [Checkers 2]](https://www.youtube.com/watch?v=e_WC3b5Hy8Q)

## Tools & Websites

* [CPetry's normal map generator](https://cpetry.github.io/NormalMap-Online/)
* [Free PBR textures](https://3dtextures.me/)

## Libraries

### Wrapper libraries for Three.js

* [enabled3d](https://enable3d.io/) "The project enable3d offers 4 different ways. As a Standalone 3D Framework, a Physics Plugin for three.js, as a 3D Objects and Physics extension for Phaser or as a library to run Ammo.js on Node.js."
    * [Enable3D - Javascript 3D engine with physics](https://www.youtube.com/watch?v=j6nv3JIAFLk)
        * [Example Code](https://github.com/tamani-coding/enable3d-physics-examples)
* [aframe](https://aframe.io/docs/1.2.0/introduction/) "a-Frame is a web framework for building virtual reality (VR) experiences. A-Frame is based on top of HTML, making it simple to get started. But A-Frame is not just a 3D scene graph or a markup language; the core is a powerful entity-component framework that provides a declarative, extensible, and composable structure to three.js."

### Physics

* [ammo.js physics engine](https://github.com/kripken/ammo.js)
    * See links at enabled3d above as well. 

### Particle systems

* [three-nebula particle system](https://github.com/creativelifeform/three-nebula)
    * [Intro to JavaScript 3D Physics using Ammo.js and Three.js by Blue Magnificent (2019)](https://medium.com/@bluemagnificent/intro-to-javascript-3d-physics-using-ammo-js-and-three-js-dd48df81f591)

## Resources

### Models

#### STLs

* [Thingiverse](https://www.thingiverse.com/)
* [Scan the world: the open source museum](https://www.myminifactory.com/scantheworld/)
* [Myminifactory](https://www.myminifactory.com/)

#### Other / multiples

* [Turbosquid](https://www.turbosquid.com/de/Search/3D-Models/free)
* [Sketchfab](https://sketchfab.com/features/free-3d-models)

#### Blender

* [Beginner Modelling Chair Tutorial by Blender Guru](https://www.youtube.com/watch?v=Hf2esGA7vCc&list=PLjEaoINr3zgEL9UjPTLWQhLFAK7wVaRMR)
* [Blender Beginner Tutorial Series by Blender Guru](https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U)

### Textures

* [3D Textures.me](https://3dtextures.me/) – Free seamless PBR textures with Diffuse, Normal, Displacement, Occlusion, Specularity and Roughness Maps.