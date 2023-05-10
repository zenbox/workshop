/**
 * nodejs
 * Projektordner
 * prettier
 * threejs instllieren
 * vite installieren
 * vite.config.js mit basicssl
 * ---
 * Chrome Browser (desktop)
 * mit Quest Erweiterung (Immersive Web Emulator)
 * Quest XR-fähigen Browser (Wolvic, Meta Browser)
 * ---
 * npx vite --host 0.0.0.0
 * 127.0.0.1:5173 (lokal)
 * 192.168.55.96:5173/ (in der VR Brille)
 * ---
 * index.html
 * javascript
 */

// threejs and xr modules
import * as THREE from "three";
const axesHelper = new THREE.AxesHelper(10);
const gridHelper = new THREE.GridHelper(10, 10);

// Desktop browser controls
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// XR
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

// import { RapierPhysics } from "three/addons/physics/RapierPhysics.js";
// import { RigidBodyType } from "@dimforge/rapier3d";

// import("@dimforge/rapier3d").then((RAPIER) => {
//     const gravity = { x: 0.0, y: -9.81, z: 0.0 };
//     const world = new RAPIER.World(gravity);
// });

// Variablen für den Aufbau
let cubes = [],
    floor,
    group,
    ambientLight,
    controller1,
    controller2,
    w = window.innerWidth,
    h = window.innerHeight;

let physics, position;

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 2000); // Perspective: focal length, image ratio, nearest distance, farest distance
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const controllerModelFactory = new XRControllerModelFactory();

// Variablen für das Dragging
const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -1),
]);
let raycaster,
    intersected = [];
const tempMatrix = new THREE.Matrix4();
const line = new THREE.Line(geometry);
raycaster = new THREE.Raycaster();
line.name = "line";
line.scale.z = 5;

function addRenderer() {
    // Canvas initalisation with xr!
    renderer.setSize(w, h);
    renderer.xr.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio); // Optional!

    // enable shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Add canvas, button to DOM
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(XRButton.createButton(renderer));
}
function setSceneProperties() {
    scene.background = new THREE.Color(0x000000);
    scene.add(axesHelper);
    scene.add(gridHelper);
    // scene.add(light);
}
function addCamera() {
    camera.position.set(10, 5, -10);
}
function addLights() {
    ambientLight = new THREE.AmbientLight(0x404040); // soft white light

    let pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 20, 0);

    scene.add(ambientLight);
    scene.add(pointLight);
}
function addOrbitControls() {
    controls.update();
}
function animate() {
    renderer.setAnimationLoop(renderXrLoop);
}
function renderXrLoop() {
    // Render the image into the canvas object
    renderer.render(scene, camera);

    cleanIntersected();

    intersectObjects(controller1);
    intersectObjects(controller2);

    cubes.forEach((cube) => {
        cube.rotation.x += 0.005 + Math.random() * 0.05;
        cube.rotation.y += 0.005 + Math.random() * 0.05;
        cube.rotation.z += 0.005 + Math.random() * 0.05;
    });
}
// - - - - - - - - - -
// Controller functions
// - - - - - - - - - -
function addController1() {
    controller1 = renderer.xr.getController(0);

    controller1.addEventListener("selectstart", onSelectStart);
    controller1.addEventListener("selectend", onSelectEnd);

    controller1.add(line.clone());

    scene.add(controller1);
}
function addController2() {
    controller2 = renderer.xr.getController(1);
    controller2.addEventListener("selectstart", onSelectStart);
    controller2.addEventListener("selectend", onSelectEnd);

    controller2.add(line.clone());

    scene.add(controller2);
}
function addGrip1() {
    let controllerGrip1 = renderer.xr.getControllerGrip(0);
    controllerGrip1.add(
        controllerModelFactory.createControllerModel(controllerGrip1)
    );
    scene.add(controllerGrip1);
}
function addGrip2() {
    let controllerGrip2 = renderer.xr.getControllerGrip(1);
    controllerGrip2.add(
        controllerModelFactory.createControllerModel(controllerGrip2)
    );
    scene.add(controllerGrip2);
}
// - - - - - - - - - -
// DRAGGING
function onSelectStart(event) {
    this.userData.isSelecting = true;

    const controller = event.target;

    const intersections = getIntersections(controller);

    if (intersections.length > 0) {
        const intersection = intersections[0];

        const object = intersection.object;
        object.material.emissive.b = 1;
        controller.attach(object);

        controller.userData.selected = object;
    }

    controller.userData.targetRayMode = event.data.targetRayMode;
}
function onSelectEnd(event) {
    this.userData.isSelecting = false;

    const controller = event.target;

    if (controller.userData.selected !== undefined) {
        const object = controller.userData.selected;
        object.material.emissive.b = 0;
        group.attach(object);

        controller.userData.selected = undefined;
    }
}
function getIntersections(controller) {
    controller.updateMatrixWorld();

    tempMatrix.identity().extractRotation(controller.matrixWorld);

    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

    return raycaster.intersectObjects(group.children, false);
}
function intersectObjects(controller) {
    // Do not highlight in mobile-ar

    if (controller.userData.targetRayMode === "screen") return;

    // Do not highlight when already selected

    if (controller.userData.selected !== undefined) return;

    const line = controller.getObjectByName("line");
    const intersections = getIntersections(controller);

    if (intersections.length > 0) {
        const intersection = intersections[0];

        const object = intersection.object;

        object.material.emissive.r = 1;

        intersected.push(object);

        line.scale.z = intersection.distance;
    } else {
        line.scale.z = 5;
    }
}
function cleanIntersected() {
    while (intersected.length) {
        const object = intersected.pop();
        object.material.emissive.r = 0;
    }
}
// - - - - - - - - - -
function addCubes() {
    for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(
            Math.random() * 1.5,
            Math.random() * 1.5,
            Math.random() * 1.5
        );

        const material = new THREE.MeshPhongMaterial({
            color: Math.random() * 0xff0000,
        });

        let cube = new THREE.Mesh(geometry, material);

        cube.position.set(
            -5 + Math.random() * 10,
            0 + Math.random() * 3,
            -5 + Math.random() * 10
        );

        cubes.push(cube);
        group.add(cube);
    }
}
function addGroup() {
    group = new THREE.Group();
    scene.add(group);
}
function addFloor() {
    const geometry = new THREE.BoxGeometry(20, 0.1, 20);
    const material = new THREE.MeshPhongMaterial({ color: 0x666666 });
    floor = new THREE.Mesh(geometry, material);
    floor.rotation.set(0, 0, 0);
    floor.position.set(0, -0.1, 0);
    scene.add(floor);
}

// - - - - - - - - - -
// PHYSICS
// - - - - - - - - - -
// physics = await RapierPhysics();
// position = new THREE.Vector3();

// - - - - - - - - - -
// PROCESS
// - - - - - - - - - -
addCamera();
addLights();
addRenderer();
addOrbitControls();

setSceneProperties();

addController1();
addController2();
addGrip1();
addGrip2();

addGroup();
addCubes();
addFloor();

console.log(cubes.length);

// setTimeout(() => {
//     cubes.forEach((cube) => physics.addMesh(cube, 1));

//     physics.addMesh(floor, 0);
//     // physics.addMesh(cube1, 1);
//     // physics.addMesh(cube2, 1);
//     // physics.addMesh(cube3, 1);
//     // physics.addMesh(cube4, 1);
// }, 2000);

// - - - - - - - - - -
// Always at the end
// - - - - - - - - - -

animate();
