// threejs and xr modules
import * as THREE from "three";
const axesHelper = new THREE.AxesHelper(10);
const gridHelper = new THREE.GridHelper(10, 10);

const textureLoader = new THREE.TextureLoader();

// Desktop browser controls
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// XR
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

// Text
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
const loader = new FontLoader();

let controller1,
    controller2,
    w = window.innerWidth,
    h = window.innerHeight,
    barMaterials = [];

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

let physics, position;
const group = new THREE.Group();
const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000); // Perspective: focal length, image ratio, nearest distance, farest distance
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const controllerModelFactory = new XRControllerModelFactory();

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
    camera.position.set(0, 2, 0);
}
function addLights() {
    let ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);
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
    bar.rotation.y += 0.01;
    bar.rotation.z += 0.01;
    update();

    cleanIntersected();

    intersectObjects(controller1);
    intersectObjects(controller2);

    // Texture movement
    // if (barMaterials[5]) barMaterials[5].map.rotation += 0.003;

    // Spotlight movement
    var per = Math.round(frame) / frameMax,
        bias = 1 - Math.abs(0.5 - per) / 0.5,
        radian = Math.PI * 2 * per,
        x = Math.cos(radian) * 8,
        y = 10,
        z = Math.sin(radian) * 8;
    spotLight.position.set(x, y, z);
    spotTarget.position.set(0, 0, -3 + 6 * bias);

    var now = new Date(),
        secs = (now - lt) / 1000;
    if (secs > 1 / fps_update) {
        update();
        renderer.render(scene, camera);
        frame += fps_movement * secs;
        frame %= frameMax;
        lt = now;
    }
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
// - - - - - - - - - - -
// HOUSE
// - - - - - - - - - - -
let houseWidth = 20,
    houseHeight = 20,
    houseDepth = 20;

function addHouse() {
    let houseGeometry = new THREE.BoxGeometry(
            houseWidth,
            houseHeight,
            houseDepth
        ),
        houseMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.BackSide,
        }),
        houseMesh = new THREE.Mesh(houseGeometry, houseMaterial);

    houseMesh.receiveShadow = true;

    houseMesh.position.set(0, houseHeight / 2, 0);

    scene.add(houseMesh);
}
function addLightBulb(x = 0, y = houseHeight / 2, z = 0) {
    let pointLight = new THREE.PointLight(0xffffff, 1, 20, 2),
        lightBulbGeometry = new THREE.SphereGeometry(0.1),
        lightBulbMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }),
        lightBulbMesh = new THREE.Mesh(lightBulbGeometry, lightBulbMaterial),
        group = new THREE.Group();

    group.add(pointLight);
    group.add(lightBulbMesh);

    group.position.set(x, y, z);

    scene.add(group);
    return group;
}
function addWoodenBar() {
    let barGeometry = new THREE.BoxGeometry(0.2, 0.4, 5);

    let frontBump = textureLoader.load("textures/plane-wood-seamless-bump.jpg");
    let backBump = textureLoader.load("textures/plane-wood-seamless-bump.jpg");

    let top = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/plane-wood-seamless.jpg"),
    });
    let bottom = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/plane-wood-seamless.jpg"),
    });
    let front = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/plane-wood-seamless-2.jpg"),
    });
    let back = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/plane-wood-seamless-2.jpg"),
    });
    let right = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/trunk-wood.jpg"),
    });
    let left = new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/trunk-wood.jpg"),
    });

    right.map.center.x = left.map.center.x = 0.5;
    right.map.center.y = left.map.center.y = 0.5;
    right.map.offset.x = left.map.offset.x = 0;
    right.map.offset.y = left.map.offset.y = 0.2;
    right.map.repeat.x = left.map.repeat.x = 0.25;
    right.map.repeat.y = left.map.repeat.y = 0.5;

    front.map.repeat.x = 0.125;
    front.map.repeat.y = 0.125;
    back.map.repeat.x = 0.125;
    back.map.repeat.y = 0.125;

    barMaterials.push(top);
    barMaterials.push(bottom);
    barMaterials.push(front);
    barMaterials.push(back);
    barMaterials.push(right);
    barMaterials.push(left);

    let barMesh = new THREE.Mesh(barGeometry, barMaterials);

    // barTexture1.repeat.set(0.25, 0.5);

    barMesh.castShadow = true;
    barMesh.receiveShadow = true;

    front.bumpMap = frontBump;
    front.bumpScale = 0.02;
    back.bumpMap = backBump;
    back.bumpScale = 0.02;

    barMesh.position.set(1, 1.25, -4);
    barMesh.rotation.x = 0;
    barMesh.rotation.y = 1.5;
    barMesh.rotation.z = 0.7;
    group.add(barMesh);

    return barMesh;
}
function addSpotlight() {
    const color = new THREE.Color(0xff00ff),
        intensity = 1,
        distance = 30,
        angle = Math.PI * 0.05,
        penumbra = 0.25,
        decay = 0.5;
    const spotLight = new THREE.SpotLight(
        color,
        intensity,
        distance,
        angle,
        penumbra,
        decay
    );

    // spotLight.map = new THREE.TextureLoader()
    // spotLight.shadow.focus = 0.01;

    spotLight.position.set(9, +19, -9);
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 512;
    spotLight.shadow.mapSize.height = 512;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 1000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);

    return spotLight;
}

function addText() {
    loader.load(
        "node_modules/three/examples/fonts/helvetiker_regular.typeface.json",
        function (font) {
            let geometry, material, mesh;
            geometry = new TextGeometry("Hello three.js!", {
                font: font,
                size: 200,
                height: 20,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 8,
                bevelOffset: -2,
                bevelSegments: 5,
            });

            material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
            });

            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, -5);
            console.dir(mesh);
            let sc = 0.005;
            mesh.scale.x = sc;
            mesh.scale.y = sc;
            mesh.scale.z = sc;
            mesh.castShadow = true;
            scene.add(mesh);
            return mesh;
        }
    );
}
// SpotLight
var secs = 0,
    fps_update = 30, // fps rate to update ( low fps for low CPU use, but choppy video )
    fps_movement = 60, // fps rate to move camera
    frame = 0,
    frameMax = 600,
    lt = new Date();

var update = function () {
    var per = Math.round(frame) / frameMax,
        bias = 1 - Math.abs(0.5 - per) / 0.5,
        radian = Math.PI * 2 * per,
        x = Math.cos(radian) * 8,
        y = 10,
        z = Math.sin(radian) * 8;
    spotLight.position.set(x, y, z);
    spotTarget.position.set(0, 0, -3 + 6 * bias);
};

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

addText();
addHouse();
let bar = addWoodenBar();
camera.lookAt(bar.position);

let bulb1 = addLightBulb();
let bulb2 = addLightBulb(5, 8, 5);

let spotLight = addSpotlight();

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

let spotTarget = new THREE.Object3D(); // spotlight target
spotLight.target = spotTarget; // set spotLight target for spotLight

scene.add(spotTarget);
scene.add(group);
// - - - - - - - - - -
// Always at the end
// - - - - - - - - - -
animate();
