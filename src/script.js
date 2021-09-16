import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


// Settings

const SETTINGS = {
    render_wireframe: false,
    show_edges: false,
}

// Debug GUI
const gui = new dat.GUI()

// Texture loading
// den Loader instanziieren
const textureloader = new THREE.TextureLoader();
// Basis-Textur
const baseTexture = textureloader.load('/textures/hammered_metal/Metal_Hammered_004_basecolor.jpg');
// Scaling
baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.repeat.set( 2, 2 );
// Normal/Bump-Texture
const normalTexture = textureloader.load('/textures/hammered_metal/Metal_Hammered_004_normal.jpg');
normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
normalTexture.repeat.set( 2, 2 );
// Metall-Textur
const metallicTexture = textureloader.load('/textures/hammered_metal/Metal_Hammered_004_metallic.jpg');
metallicTexture.wrapS = metallicTexture.wrapT = THREE.RepeatWrapping;
metallicTexture.repeat.set( 2, 2 );
// Rauheits-Textur
const roughnessTexture = textureloader.load('/textures/hammered_metal/Metal_Hammered_004_roughness.jpg');
roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
roughnessTexture.repeat.set( 2, 2 );
// Displacement/Verformungs-Textur
const displacementTexture = textureloader.load('/textures/hammered_metal/Metal_Hammered_004_height.png');
displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
displacementTexture.repeat.set( 2, 2 );

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//3D-Objekte
// 1. Geometrie erstellen
// 2. Material ("Textur") erstellen
// 3. Geometrie und Material in einem Mesh kombinieren, so dass das eigentliche 3D-Objekt entsteht.
// 4. Das Objekt zur Szene hinzufügen, um es anzuzeigen.

// 1. Geometrie
const geometry = {
    box: new THREE.BoxGeometry( 1, 1, 1 ),
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
}.sphere;



// 2. Materials
// Materialien
// + MeshStandardMaterial
// + MeshBasicMaterial

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


// 3. Mesh 
const object = new THREE.Mesh( geometry, material );

// Set further attributes on object
object.name = "Planet";

// 4. Zur Szene hinzufügen
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