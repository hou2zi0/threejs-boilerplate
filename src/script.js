import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/*
ENGLISH
Basic imports can be seen above. The Three.js base class does not import everything one might need, but 
provides the most basic functionalities. Further functionalitiy is imported via a modularized system. 

DEUTSCH 
Oben sieht man die grundständigen Importe. Die Three.js-Basis-Klasse importiert nicht alle alle Funktionalitäten, 
die man jemals brauchen könnten, sondern bringt die grundlegenden Funktionalitäten mit. Darüber hinausgehende
Funktionalität kann über ein modularisiertes System von Importen hinzugefügt werden.   
*/

// Settings

const SETTINGS = {
    render_wireframe: false,
    show_edges: false,
}

// Debug GUI
/* 
ENGLISH
The debug gui enables us to show and manipulate objects and there attributes on the frontend. 
Instanciated objects and their respective attributes have to be added to specific folders of the GUI object
in order to be shown and usable on the frontend. Examples on how to achieve this are given below. 

DEUTSCH 
Die Debug-GUI bietet uns die Möglichkeit instanziierte Objekte und ihre Attribute bzw. Eigenschaften im Frontend 
anzuzeigen und dort zu manipulieren. Damit Objekte und Attribute im Frontend angezeigt werden, müssen sie 
Sektionen ("folder") der GUI zugewiesen werden. Beispiele, wie das genau funktioniert, folgen weiter unten. 
*/

/*
Instanciates the debug gui object.
Instanziiert das Debug-GUI-Objekt.
*/
const gui = new dat.GUI()

/*
Texture loading
Laden von Texturen
*/
/* 
ENGLISH
Textures are someting like clothing for 3D objects. In order to show the 3D objects with their clothing,
one has to load the textures first. The texture files are just normal image files, mostly .jpg or .png files.
Depending on the textures intended use the pixel data within the files varies. Some textures need graxscale data, 
others depend on RGB color data.
The basic workflow for all textures looks like this:
1. Put the image files, where they can be found, e.g. a static files folder or a CDN.
2. Instantiate a texture loader.
3. Load the image files via a texture loader.
4. Resize, rescale or offset the textures in order to fit the object better.

DEUTSCH
Texturen sind so etwas wie Kleidung für 3D-Objekte. Um die 3D-Objekte mit ihrer Kleidung darstellen zu können,
muss man zuerst die Texturen laden. Die Texturdateien sind ganz normale Bilddateien, meist .jpg oder .png Dateien.
Je nach Verwendungszweck der Texturen variieren die Pixeldaten in den Dateien. Einige Texturen benötigen Graustufen-Daten, 
andere sind auf RGB-Farb-Daten angewiesen.
Der grundlegende Arbeitsablauf für alle Texturen sieht wie folgt aus:
1. Lege die Bilddateien dort ab, wo sie gefunden werden können, z.B. in einem Ordner für statische Dateien oder über ein CDN.
2. Instanziiere einen Texturlader.
3. Lade die Bilddateien über einen Texturlader.
4. Ändere die Größe, Skalierung oder den Versatz der Texturen, um sie besser an das Objekt anzupassen.
*/

// 1. Folder for texture / Texturenordner: "./textures"
// 2. Instantiate texture loader / Texturlader instanziieren:
const textureloader = new THREE.TextureLoader();
// 3. Load the texture / lade die Textur: 
// Base texture / Basis-Textur
const baseTexture = textureloader.load('./textures/hammered_metal/Metal_Hammered_004_basecolor.jpg');
// 4. Scaling the texture / Skalieren der Textur:
baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.repeat.set( 2, 2 );
// Normal/Bump-Texture
const normalTexture = textureloader.load('./textures/hammered_metal/Metal_Hammered_004_normal.jpg');
normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
normalTexture.repeat.set( 2, 2 );
// Metall-Textur
const metallicTexture = textureloader.load('./textures/hammered_metal/Metal_Hammered_004_metallic.jpg');
metallicTexture.wrapS = metallicTexture.wrapT = THREE.RepeatWrapping;
metallicTexture.repeat.set( 2, 2 );
// Rauheits-Textur
const roughnessTexture = textureloader.load('./textures/hammered_metal/Metal_Hammered_004_roughness.jpg');
roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
roughnessTexture.repeat.set( 2, 2 );
// Displacement/Verformungs-Textur
const displacementTexture = textureloader.load('./textures/hammered_metal/Metal_Hammered_004_height.png');
displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
displacementTexture.repeat.set( 2, 2 );

// Canvas
/*
ENGLISH
Three.js works on the browser's canvas element. So in order to have an area where the 3D objects are displayed, 
Three.js needs to know where it can find a suitable canvas element in its corresponding HTML file. 

DEUTSCH
Three.js arbeitet mit dem Canvas-Element des Browsers. Um also einen Bereich zu haben, in dem die 3D-Objekte angezeigt werden, 
muss Three.js wissen, wo es in der entsprechenden HTML-Datei ein geeignetes Canvas-Element finden kann.  
*/
const canvas = document.querySelector('canvas.webgl')

// Scene
/*
ENGLISH
All Three.js objects (3D models, cameras, lights, …) live in a scene object. The scene is similar to a folder or 
to the HTML document. So Three.js needs at least one scene object to hold all the other things. 

DEUTSCH  
Alle Three.js-Objekte (3D-Modelle, Kameras, Lichter, ...) befinden sich in einem Szenenobjekt. Die Szene ist vergleichbar mit einem Ordner oder 
mit dem HTML-Dokument. Three.js braucht also mindestens ein Szenenobjekt, um all die anderen Dinge zu kapseln.
*/
const scene = new THREE.Scene()

/*
3D objects
3D-Objekte
*/

/*
ENGLISH
1. create a geometry
2. create a material
3. combine geometry and material in a mesh to create the actual 3D object.
4. add the object to the scene to display it.

DEUTSCH 
1. Geometrie erstellen
2. Material erstellen
3. Geometrie und Material in einem Mesh kombinieren, so dass das eigentliche 3D-Objekt entsteht.
4. Das Objekt zur Szene hinzufügen, um es anzuzeigen.
*/

// 1. Geometry / Geometrie
/*
ENGLISH
There are a number of predefined primitive classes available. Each class needs slightly different 
arguments for their respective constructor. See the documentation for further info on the 
primitives.

DEUTSCH
Es gibt eine Reihe von vordefinierten primitiven Klassen. Jede Klasse benötigt leicht unterschiedliche 
Argumente für ihren jeweiligen Konstruktor. Siehe die Dokumentation für weitere Informationen über die 
Primitive.
*/
const geometry = {
    box: new THREE.BoxGeometry( 
        1, // width / Breite
        1, // height / Höhe
        1, // depth / Tiefe
        1, // width segemnts / Anzahl der Segmente der Breite
        1, // height segments / Anzahl der Segmente der Höhe
        1  // depth segments / Anzahl der Segmente der Tiefe
        ),
    torusknot: new THREE.TorusKnotGeometry( .5, .3, 40, 40 ),
    torus: new THREE.TorusGeometry( .5, .3, 10, 10 ),
    ring: new THREE.RingGeometry(.2, .7, 5, 4, 0, 3.2),
    plane: new THREE.PlaneGeometry( 1, 1, 10, 10 ),
    octahedron: new THREE.OctahedronGeometry(.5, 2),
    icosahedron: new THREE.IcosahedronGeometry(.5, 0),
    dodecahedron: new THREE.DodecahedronGeometry(.5, 0),
    cylinder: new THREE.CylinderGeometry( .5, .5, 1, 6 ),
    cone: new THREE.ConeGeometry( .5, 1, 10 ),
    circle: new THREE.CircleGeometry( .5, 32 ),
    sphere: new THREE.SphereBufferGeometry( .5, 128, 128 )
}
.sphere; // "sphere" is chosen as value for the variable geometry / "sphere" wird als Wert für die variable Geometrie gewählt



// 2. Materials / Material
/*
ENGLISH
Materials are responsible for how the geometry looks, how textures are applied to it, and how 
it interacts with a light source. These are the most common materials for beginners (check the
documentation for all the other materials available and this page https://threejsfundamentals.org/threejs/lessons/threejs-materials.html):
* MeshBasicMaterial is not affected by lights.
* MeshDepthMaterial shows the distance to the camera.
* MeshLambertMaterial is affected only at the vertices.
* MeshPhongMaterial is affected at every pixel and supports highlights.
* MeshStandardMaterial is very similar to phong.
* MeshToonMaterial uses a gradient map to give ot a flat, cartoonish look.

The most useful material for beginners is the standard material.
The standard material has different attributes that may be set to change how it's 
displayed. 
* color sets the base color of the object
* map applies a base texture
* roughness sets how matt or glossy the object is
* roughnessMap sets the roughness value based on pixel data
* metalness sets how shiny or metal like the object is
* metalnessMap sets the metalness value based on pixel data
* wireframe when set to true, the object is shown as wire frame
* emissive sets the color with which the object glows
* emissiveIntensity sets the glows intensity
* normalMap sets a normal texture which applies pre calculated shadow areas
* displacementMap displaces the objects vertices based on pixel data
* displacementScale sets the force of the displacement

DEUTSCH 
Materialien sind dafür verantwortlich, wie die Geometrie aussieht, wie Texturen auf sie angewendet werden und wie 
sie mit einer Lichtquelle interagiert. Dies hier sind die gängigsten Materialien für Anfänger (siehe die
Dokumentation für alle anderen verfügbaren Materialien und diese Seite https://threejsfundamentals.org/threejs/lessons/threejs-materials.html):
* MeshBasicMaterial wird nicht von Lichtern beeinflusst.
* MeshDepthMaterial zeigt den Abstand zur Kamera an.
* MeshLambertMaterial wird nur an den Scheitelpunkten beeinflusst.
* MeshPhongMaterial wird an jedem Pixel beeinflusst und unterstützt Glanzlichter.
* MeshStandardMaterial ist dem Phong-Material sehr ähnlich.
* MeshToonMaterial verwendet eine Gradient Map, um ein flaches, cartoonhaftes Aussehen zu erzielen.

Das nützlichste Material für Anfänger ist das Standardmaterial.
Das Standardmaterial hat verschiedene Attribute, die eingestellt werden können, um seine Darstellung zu ändern. 
dargestellt wird. 
* color legt die Grundfarbe des Objekts fest
* map wendet eine Grundtextur an
* roughness legt fest, wie matt oder glänzend das Objekt ist
* roughnessMap legt den Rauheitswert auf der Grundlage von Pixeldaten fest
* metalness legt fest, wie glänzend oder metallisch das Objekt ist
* metalnessMap setzt den Wert für metalness auf der Grundlage von Pixeldaten
* wireframe wenn auf true gesetzt, wird das Objekt als Drahtgitter dargestellt
* emissive legt die Farbe fest, mit der das Objekt leuchtet
* emissiveIntensity legt die Intensität des Leuchtens fest
* normalMap legt eine normale Textur fest, die vorberechnete Schattenbereiche anlegt
* displacementMap verschiebt die Eckpunkte des Objekts basierend auf den Pixeldaten
* displacementScale legt die Stärke der Verschiebung fest
*/
const material = new THREE.MeshStandardMaterial( {
    color: 0xd2aa6d,
    map: baseTexture,
    //roughness: 0.2,
    roughnessMap: roughnessTexture,
    //metalness: 0.7,
    metalnessMap: metallicTexture,
    wireframe: false,
    //emissive: 0x7a7017,
    //emissiveIntensity: 1.5,
    normalMap: normalTexture,
    displacementMap: displacementTexture,
    displacementScale: 0.02,
});


// 3. Mesh / Mesh
/*
ENGLISH
A 3D object in Three.js is composed of a geometry, that defines the objects shape, and of a material,
that defines how the structure of the object looks and is affected by lights. In order to show a 3D
object on the screen, both – geometry and material – have to be combined as a mesh, which then 
represents the 3D object as such. 
So in order to create a new 3D object, geometry and material are supplied to the THREE.Mesh class. 
This class combines geometry and material and instantiates a new 3D object object. This allows reuse of 
geometries and materials.

DEUTSCH
Ein 3D-Objekt in Three.js besteht aus einer Geometrie, die die Form des Objekts definiert, und aus einem Material,
das definiert, wie die Struktur des Objekts aussieht und von Lichtern beeinflusst wird. Um ein 3D
Objekt auf dem Bildschirm darzustellen, müssen beide – Geometrie und Material – zu einem Mesh kombiniert werden, das dann 
das 3D-Objekt als solches darstellt. 
Um also ein neues 3D-Objekt zu erstellen, werden Geometrie und Material an die Klasse THREE.Mesh übergeben. 
Diese Klasse kombiniert Geometrie und Material und instanziiert ein neues 3D-Objekt. Dies ermöglicht die Wiederverwendung von 
Geometrien und Materialien.
*/
const object = new THREE.Mesh( geometry, material );

// Set further attributes on object
object.name = "Planet";

// 4. Zur Szene hinzufügen
/*
ENGLISH
In order to be visible on the canvas, the newly instantiated mesh object has to be added to the current scene object.

DEUTSCH 
Um auf der Leinwand sichtbar zu sein, muss das neu instanziierte Mesh-Objekt dem aktuellen Szenenobjekt hinzugefügt werden.
*/
scene.add( object );

// Helper Geometries
if (SETTINGS.show_edges){
    const edges = new THREE.EdgesGeometry( geometry );
    const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    scene.add( line );
}


if (SETTINGS.render_wireframe){
    const wireframe = new THREE.WireframeGeometry( geometry );
    const wire = new THREE.LineSegments( wireframe );
    wire.material.depthTest = false;
    wire.material.opacity = 0.75;
    wire.material.transparent = true;
scene.add( wire );
}

// Lights
const pointLight = new THREE.PointLight(
    // Farbe
    0xffffff,
    // Intensität 
    3.0);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(
    // Farbe
    0xff0000,
    // Intensität 
    6.47);
pointLight2.position.set(1,1,1.73);
scene.add(pointLight2);

// Set GUI folders
const redlight = gui.addFolder('Red Light');
const mainobject = gui.addFolder('Sphere'); 
// Set subfolders 
const position = mainobject.addFolder('Position');
const scale = mainobject.addFolder('Scale');
// Set Debug GUI
redlight.add(pointLight2.position, 'y').min(-3).max(3).step(0.01);
redlight.add(pointLight2.position, 'x').min(-6).max(6).step(0.01);
redlight.add(pointLight2.position, 'z').min(-3).max(3).step(0.01);
redlight.add(pointLight2, 'intensity').min(0).max(15).step(0.01);

position.add(object.position, 'y').min(-10).max(10).step(0.01);
position.add(object.position, 'x').min(-10).max(10).step(0.01);
position.add(object.position, 'z').min(-10).max(10).step(0.01);
scale.add(object.scale, 'x').min(0).max(10).step(0.01);
scale.add(object.scale, 'y').min(0).max(10).step(0.01);
scale.add(object.scale, 'z').min(0).max(10).step(0.01);

// Helper geos for lights
const pointLighthelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLighthelper);
const pointLight2helper = new THREE.PointLightHelper(pointLight2, 1);
scene.add(pointLight2helper);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls

//const controls = new OrbitControls(camera, canvas)
//controls.enableDamping = true



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */


// Mouse interaction
const mousemove = {
    mouseX: 0,
    mouseY: 0,
    normalizedMouse: {
        x: 0,
        y: 0
    },
    targetX: 0,
    targetY: 0,
    windowHalfX: window.innerWidth / 2,
    windowHalfY: window.innerHeight / 2, 
};

document.addEventListener('mousemove', (e) => {
    mousemove.mouseX = (e.clientX - mousemove.windowHalfX);
    mousemove.mouseY = (e.clientY - mousemove.windowHalfY);
    // der Raycaster benötigt ein normalisiertes Koordinatensystem auf Basis 
    // der Bildschrimkoordinaten des Mauszeigers
    // der Raycaster wird innerhalb des Animations-Loops mit den jeweils aktuellen
    // Koordinaten neu gesetzt (siehe unten)
    mousemove.normalizedMouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	mousemove.normalizedMouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
});

window.addEventListener('scroll', (e) => {
    object.position.z = window.scrollY * .0009;
})

const orig = {
    x: object.scale.x,
    y: object.scale.y,
    z: object.scale.z
};

const objectPlanet = object;
// Raycast passiert nur bei Mausklick
document.addEventListener('click', (e) => {
    // der Raycaster gibt ein Array mit den vom Strahl getroffenen
    // Objekten zurück. Dieses Array ist leer (Länge == 0), wenn 
    // keine Objekte getroffen wurden.
    let intersects = raycaster.intersectObjects( scene.children ); 
    // Alle Elemente in der Szene. Klick auf den LightHelper logged bspw. diesen.
    // Statt scene.children kann auch ein Array relevanter Objekte angegeben werden: [ objectPlanet ]

    if (intersects.length > 0) {
        let planet = intersects[0].object;
        console.log("Klick ", planet);
    } else {
        console.log("No intersections.");
    }
})

// Raycast-event bei gedrückt gehaltener Maustaste
document.addEventListener('mousedown', (e) => {
    // der Raycaster gibt ein Array mit den vom Strahl getroffenen
    // Objekten zurück. Dieses Array ist leer (Länge == 0), wenn 
    // keine Objekte getroffen wurden.
    let intersects = raycaster.intersectObjects( scene.children );

    if (intersects.length > 0) {
        //let planet = intersects[0].object;
        //console.log("Mousedown ", planet);
        // Skaliert die Größe des Objekts hoch
        //planet.scale.x = orig.x * 1.2;
        //planet.scale.y = orig.y * 1.2;
        //planet.scale.z = orig.z * 1.2;
    }
})

document.addEventListener('mouseup', (e) => {
    // Setzt die Größe des Planeten auf den Anfangswert
    // sobald die Maustaste nicht mehr gehalten wird
    //object.scale.x = orig.x;
    //object.scale.y = orig.y;
    //object.scale.z = orig.z;
})

const raycaster = new THREE.Raycaster();
const clock = new THREE.Clock()

const tick = () =>
{
    mousemove.targetX = mousemove.mouseX * .001;
    mousemove.targetY = mousemove.mouseY * .001;

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    object.rotation.y = .3 * elapsedTime;

    object.rotation.y += .5 * (mousemove.targetX - object.rotation.y);
    object.rotation.x += .5 * (mousemove.targetY - object.rotation.x);
    object.rotation.z += .005 *(mousemove.targetY - object.rotation.x);
    // Update Orbital Controls
    //controls.update()

    // Raycaster
    // hier wird der Raycaster mit den jeweils aktuellen Mauskoordinaten
    // aktualisiert, so dass der Strahl von der korrekten Position
    // geschossen wird
    raycaster.setFromCamera( mousemove.normalizedMouse, camera );
	
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()