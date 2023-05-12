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

import CANNON from "cannon";
// import * as CANNON from "/node_modules/cannon-es/dist/cannon-es.js"
let world;

// XR
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

//Physics

// Variablen für den Aufbau
let cubes = [],
    group,
    floor,
    back,
    left,
    right,
    marker,
    INTERSECTION,
    baseReferenceSpace,
    ambientLight,
    controller1,
    controller2,
    w = window.innerWidth,
    h = window.innerHeight;

//Physics

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
let raycaster_drag,
    raycasterTeleport,
    intersected = [];
const tempMatrix = new THREE.Matrix4();
const line = new THREE.Line(geometry);
raycaster_drag = new THREE.Raycaster();
//Raycaster für Teleport
raycasterTeleport = new THREE.Raycaster();

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

    renderer.xr.addEventListener(
        "sessionstart",
        () => (baseReferenceSpace = renderer.xr.getReferenceSpace())
    );

    // Add canvas, button to DOM
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(XRButton.createButton(renderer));
}
function setSceneProperties() {
    scene.background = new THREE.Color(0xffffff);
    scene.add(axesHelper);
    scene.add(gridHelper);
    // scene.add(light);
}
function addCamera() {
    camera.position.set(1, 8, 30);
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
    INTERSECTION = undefined;

    if (controller1.userData.isSelecting === true) {
        tempMatrix.identity().extractRotation(controller1.matrixWorld);

        raycasterTeleport.ray.origin.setFromMatrixPosition(
            controller1.matrixWorld
        );
        raycasterTeleport.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        const intersects = raycasterTeleport.intersectObjects([floor]);

        if (intersects.length > 0) {
            INTERSECTION = intersects[0].point;
        }
    } else if (controller2.userData.isSelecting === true) {
        tempMatrix.identity().extractRotation(controller2.matrixWorld);

        raycasterTeleport.ray.origin.setFromMatrixPosition(
            controller2.matrixWorld
        );
        raycasterTeleport.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        const intersects = raycasterTeleport.intersectObjects([floor]);

        if (intersects.length > 0) {
            INTERSECTION = intersects[0].point;
        }
    }

    if (INTERSECTION) marker.position.copy(INTERSECTION);

    marker.visible = INTERSECTION !== undefined;
    // Render the image into the canvas object
    renderer.render(scene, camera);

    cleanIntersected();

    intersectObjects(controller1);
    intersectObjects(controller2);

    cubes.forEach((cube) => {
        cube.rotation.x += 0.005 + Math.random() * 0.005;
        cube.rotation.z += 0.005 + Math.random() * 0.005;
        cube.rotation.x += 0.005 + Math.random() * 0.005;
    });

    updatePhysics();
}
// - - - - - - - - - -
// Controller functions
// - - - - - - - - - -
function addController1() {
    controller1 = renderer.xr.getController(0);

    controller1.addEventListener("selectstart", onDragStart);
    controller1.addEventListener("selectend", onDragEnd);

    controller1.add(line.clone());

    scene.add(controller1);
}
function addController2() {
    controller2 = renderer.xr.getController(1);
    controller2.addEventListener("selectstart", onTeleportStart);
    controller2.addEventListener("selectend", onTeleportEnd);

    //console.log("AAAAAA");

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
function onDragStart(event) {
    this.userData.isSelecting = true;

    const controller = event.target; // group!

    const intersections = getIntersections(controller);

    if (intersections.length > 0) {
        const intersection = intersections[0];

        const object = intersection.object; // selected cube!

        object.material.emissive.b = 1;

        controller.attach(object);

        controller.userData.selected = object;
    }

    controller.userData.targetRayMode = event.data.targetRayMode;
}
function onDragEnd(event) {
    this.userData.isSelecting = false;

    const controller = event.target;

    if (controller.userData.selected !== undefined) {
        const object = controller.userData.selected;

        object.material.emissive.b = 0;

        console.dir(object);

        group.attach(object);
        updateBodyFromMesh();

        controller.userData.selected = undefined;
    }
}
//Teleport
function onTeleportStart() {
    this.userData.isSelecting = true;
    //console.log("Suqueezebutton pressed");
}
function onTeleportEnd() {
    // console.log("Suqueezebutton unpressed");
    this.userData.isSelecting = false;

    if (INTERSECTION) {
        const offsetPosition = {
            x: -INTERSECTION.x,
            y: -INTERSECTION.y,
            z: -INTERSECTION.z,
            w: 1,
        };
        // todo HIER ROTATION BEIM TELEPORTIEREN
        const offsetRotation = new THREE.Quaternion();
        // console.dir(offsetRotation);
        const transform = new XRRigidTransform(offsetPosition, offsetRotation);
        const teleportSpaceOffset =
            baseReferenceSpace.getOffsetReferenceSpace(transform);

        renderer.xr.setReferenceSpace(teleportSpaceOffset);
    }
}
function addMarker() {
    marker = new THREE.Mesh(
        new THREE.CircleGeometry(0.25, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x808080 })
    );
    scene.add(marker);
}
// Raycaster
function getIntersections(controller) {
    controller.updateMatrixWorld();

    tempMatrix.identity().extractRotation(controller.matrixWorld);

    raycaster_drag.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster_drag.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

    return raycaster_drag.intersectObjects(group.children, false);
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
    for (let i = 0; i <= 10; i++) {
        const geometry = new THREE.BoxGeometry(
            Math.random() * 0.5,
            Math.random() * 0.5,
            Math.random() * 0.5
        );

        const material = new THREE.MeshPhongMaterial({
            color: Math.random() * 0xff0000,
        });

        let cube = new THREE.Mesh(geometry, material);

        cube.position.set(
            -5 + Math.random() * 10, //x orange
            3 + Math.random() * 2, // y grün
            -4 + Math.random() * 8 // -z blau
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
    const geometry = new THREE.BoxGeometry(10, 0.1, 10);
    const material = new THREE.MeshBasicMaterial({
        color: 0x444444,
    });
    let floor = new THREE.Mesh(geometry, material);
    floor.position.y = -0.2;
    //Boden neigen
    //floor.rotation.set(-0.3, 0, 0);
    floor.receiveShadow = true;
    scene.add(floor);

    return floor;
}
function addBack() {
    const geometry = new THREE.BoxGeometry(10, 10, 0.5);
    const material = new THREE.MeshBasicMaterial({
        color: 0x444444,
    });
    back = new THREE.Mesh(geometry, material);
    back.position.y = 4.85;
    back.position.z = -5.2;
    back.receiveShadow = true;
    scene.add(back);
}
function addLeft() {
    const geometry = new THREE.BoxGeometry(0.5, 10, 10);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
    });
    left = new THREE.Mesh(geometry, material);
    left.position.y = 4.85;
    left.position.z = -0;
    left.position.x = 5;
    left.receiveShadow = true;
    scene.add(left);
}
function addRight() {
    const geometry = new THREE.BoxGeometry(0.5, 10, 10);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
    });
    right = new THREE.Mesh(geometry, material);
    right.position.y = 4.85;
    right.position.z = -0;
    right.position.x = -5;
    right.receiveShadow = true;
    scene.add(right);
}

// - - - - - - - - - - -
//Physics
// - - - - - - - - - - -
floor = addFloor();
addGroup();
addCubes();

world = new CANNON.World();
world.gravity.set(0, -9.82 * 20, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 16;

//Floor
let floorBody = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Plane(),
});
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
floorBody.position.copy(floor.position);

function updatePhysics() {
    world.step(1.0 / 60.0);
    // console.dir(physicsObject)
    updateMeshFromBody();
}

function updateMeshFromBody() {
    if (!simulationRunning) {
        meshObject.position.copy(physicsObject.position);
        meshObject.quaternion.copy(physicsObject.quaternion);
    }
}

function updateBodyFromMesh() {
    physicsObject.position.copy(meshObject.position);
    physicsObject.quaternion.copy(meshObject.quaternion);
}
let simulationRunning = false;
let s = 0.5;
let physicsObject = new CANNON.Body({
    mass: 1,
    shape: new CANNON.Box(new CANNON.Vec3(s, s, s)),
    material: new THREE.MeshBasicMaterial(0xff0000),
});

let meshObject = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xffcc00 })
);

// setTimeout(() => {
//     physicsObject.position.set(0, 30, 0);
//     meshObject.position.copy(physicsObject.position);
// }, 5000);

world.add(floorBody);
world.add(physicsObject);

group.add(meshObject);

// - - - - - - - - - - -
// PROCESS
// - - - - - - - - - - -
addCamera();
addLights();
addRenderer();
addOrbitControls();

setSceneProperties();

addController1();
addController2();
addGrip1();
addGrip2();

addBack();
addLeft();
addRight();
addMarker();

//Wände und Boden zu Physics hinzufügen

// - - - - - - - - - -
// Always at the end
// - - - - - - - - - -
animate();
