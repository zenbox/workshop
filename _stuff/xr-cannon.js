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
const gridHelper = new THREE.GridHelper(2000, 2000);

// Desktop browser controls
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// XR
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

import { Node } from "three/src/core/Node.js";

// Variablen für den Aufbau
let cubes = [],
    floor,
    group,
    ambientLight,
    leftController,
    rightController,
    marker,
    baseReferenceSpace,
    w = window.innerWidth,
    h = window.innerHeight,
    INTERSECTION;

let physics, position;

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 2000); // Perspective: focal length, image ratio, nearest distance, farest distance
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const controllerModelFactory = new XRControllerModelFactory();

// Variablen für das Dragging und Teleport
const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -1),
]);
const tempMatrix = new THREE.Matrix4();
const line = new THREE.Line(geometry);
line.name = "line";
line.scale.z = 5;

let intersected = [];

const raycasterDrag = new THREE.Raycaster();
const raycasterTeleport = new THREE.Raycaster();

function addRenderer() {
    // Canvas initalisation with xr!
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio); // Optional!

    // XR für die XR-Brille aktivieren
    renderer.xr.enabled = true;

    // Bei Starten der XR-Session die Ausgangspositionierung merken,
    // um später den Teleport berechnen zu können.
    renderer.xr.addEventListener(
        "sessionstart",
        () => (baseReferenceSpace = renderer.xr.getReferenceSpace())
    );

    // Enable shadows
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
    // Transformation, Animation von Objekten
    cubes.forEach((cube) => {
        cube.rotation.x += 0.005 + Math.random() * 0.05;
        cube.rotation.y += 0.005 + Math.random() * 0.05;
        cube.rotation.z += 0.005 + Math.random() * 0.05;
    });

    // Intersection zwischen Controlle (raycaster) und Welt
    INTERSECTION = undefined;
    cleanIntersected();

    // intersectObjects(leftController);
    intersectObjects(rightController);

    // Linker Controller steuert den Teleport
    if (leftController.userData.isSelecting === true) {
        tempMatrix.identity().extractRotation(leftController.matrixWorld);
        raycasterTeleport.ray.origin.setFromMatrixPosition(
            leftController.matrixWorld
        );
        raycasterTeleport.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
        let intersects = raycasterTeleport.intersectObjects([floor]);
        if (intersects.length > 0) {
            INTERSECTION = intersects[0].point;
        }
        if (INTERSECTION) marker.position.copy(INTERSECTION);
        marker.visible = INTERSECTION !== undefined;
    }

    // Render the image into the canvas object
    renderer.render(scene, camera);
}

function addHouse() {
// Erstelle eine Geometrie
const geometry = new THREE.Geometry();

// Füge Eckpunkte zur Geometrie hinzu
geometry.vertices.push(
    new THREE.Vector3(0, 0, 0), // Eckpunkt 1
    new THREE.Vector3(1, 0, 0), // Eckpunkt 2
    new THREE.Vector3(0, 1, 0), // Eckpunkt 3
    new THREE.Vector3(0, 0, 1) // Eckpunkt 4
);

// Füge Dreiecke zur Geometrie hinzu
geometry.faces.push(
    new THREE.Face3(0, 1, 2), // Dreieck 1, bestehend aus Eckpunkten 0, 1 und 2
    new THREE.Face3(0, 2, 3) // Dreieck 2, bestehend aus Eckpunkten 0, 2 und 3
);

// Berechne die Normalen für eine korrekte Beleuchtung
geometry.computeFaceNormals();

// Erstelle ein Material für das Mesh
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Erstelle ein Mesh mit der Geometrie und dem Material
const mesh = new THREE.Mesh(geometry, material);

// Füge das Mesh zur Szene hinzu oder mache weitere Operationen damit
scene.add(mesh);
}
// - - - - - - - - - -
// Controller functions
// - - - - - - - - - -
// LEFT CONTROLLER
function addLeftController() {
    leftController = renderer.xr.getController(0);

    leftController.addEventListener("selectstart", onTeleportStart);
    leftController.addEventListener("selectend", onTeleportEnd);

    leftController.add(line.clone());

    scene.add(leftController);
}
// RIGHT CONTROLLER
function addRightController() {
    rightController = renderer.xr.getController(1);

    rightController.addEventListener("selectstart", onSelectStart);
    rightController.addEventListener("selectend", onSelectEnd);
    rightController.add(line.clone());

    scene.add(rightController);
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
function onTeleportStart(event) {
    console.log("teleport start");
    this.userData.isSelecting = true;
}
function onTeleportEnd(event) {
    console.log("teleport end");
    this.userData.isSelecting = false;
    if (INTERSECTION) {
        const offsetPosition = {
            x: -INTERSECTION.x,
            y: -INTERSECTION.y,
            z: -INTERSECTION.z,
            w: 1,
        };
        const offsetRotation = new THREE.Quaternion();
        const transform = new XRRigidTransform(offsetPosition, offsetRotation);
        const teleportSpaceOffset =
            baseReferenceSpace.getOffsetReferenceSpace(transform);

        renderer.xr.setReferenceSpace(teleportSpaceOffset);
    }
}
function onSelectStart(event) {
    this.userData.isSelecting = true;
    const controller = event.target;

    const intersections = getIntersections(controller);
    const intersection = intersections[0];
    const object = intersection.object;
    object.material.emissive.b = 1;
    controller.attach(object);

    controller.userData.selected = object;

    if (intersections.length > 0) {
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

    raycasterDrag.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycasterDrag.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

    return raycasterDrag.intersectObjects(group.children, false);
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
            0.18 + Math.random() * 0.25,
            0.18 + Math.random() * 0.25,
            0.18 + Math.random() * 0.25
        );

        const material = new THREE.MeshPhongMaterial({
            color: Math.random() * 0xff0000,
        });

        let cube = new THREE.Mesh(geometry, material);

        cube.position.set(
            -1.5 + Math.random() * 3, // x=> -1.5 bis 1.5 von links nach rechts, (orange)
            +1.0 + Math.random() * 1.5, // y=> 1 bis 2.5m hoch (grün)
            -2.0 + Math.random() * 1 // -z=> -2 bis -1m entfernt (blau)
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
    const geometry = new THREE.BoxGeometry(1000, 0.05, 1000);
    const material = new THREE.MeshPhongMaterial({ color: 0x666666 });
    floor = new THREE.Mesh(geometry, material);
    floor.rotation.set(0, 0, 0);
    floor.position.set(0, -0.2, 0);
    scene.add(floor);
}
function addMarker() {
    marker = new THREE.Mesh(
        new THREE.CircleGeometry(0.25, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    scene.add(marker);
}
// - - - - - - - - - -
// PHYSICS
// - - - - - - - - - -

// - - - - - - - - - -
// PROCESS
// - - - - - - - - - -
addCamera();
addLights();
addRenderer();
addOrbitControls();

setSceneProperties();

addLeftController();
addRightController();
addGrip1();
addGrip2();

addGroup();
addCubes();
addFloor();
addMarker();

addHouse();
// - - - - - - - - - -
// Always at the end
// - - - - - - - - - -
animate();
