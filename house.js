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

let controller1,
    controller2,
    w = window.innerWidth,
    h = window.innerHeight,
    barMaterials = [];

let physics, position;

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
    bar1.rotation.y += 0.01;
    bar1.rotation.z += 0.01;
    update();

    // Texture movement
    if (barMaterials[5]) barMaterials[5].map.rotation += 0.003;

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
    // requestAnimationFrame(loop);
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
    let barGeometry = new THREE.BoxGeometry(1, 1, 2);
    let barTextures = [];
    // let barMaterials = [];

    let i = 0;
    barTextures[i++] = textureLoader.load("textures/plane-wood-seamless.jpeg");
    barTextures[i++] = textureLoader.load("textures/plane-wood-seamless.jpeg");
    barTextures[i++] = textureLoader.load("textures/plane-wood-seamless.jpeg");
    barTextures[i++] = textureLoader.load("textures/plane-wood-seamless.jpeg");
    barTextures[i++] = textureLoader.load("textures/checkerboard.webp");
    barTextures[i++] = textureLoader.load("textures/checkerboard.webp");

    barTextures.forEach((texture) => {
        let barMaterial = new THREE.MeshStandardMaterial({
            map: texture,
        });

        barMaterials.push(barMaterial);
    });

    // barMaterials[5].map.rotation = Math.PI / 4;

    // barMaterials[5].map.centerX = 0;
    // barMaterials[5].map.centerY = 0;
    // barMaterials[5].map.offsetX = 1;
    // barMaterials[5].map.offsetY = 1;
    // barMaterials[5].map.repeatX = 0.25;
    // barMaterials[5].map.repeatY = 0.25;

    // barGeometry.faceVertexUvs[0][0][0].rotateAround(
    //     new THREE.Vector2(0.5, 0.5),
    //     textureRotation
    // );
    // barGeometry.faceVertexUvs[0][0][1].rotateAround(
    //     new THREE.Vector2(0.5, 0.5),
    //     textureRotation
    // );
    // barGeometry.faceVertexUvs[0][0][2].rotateAround(
    //     new THREE.Vector2(0.5, 0.5),
    //     textureRotation
    // );

    let barMesh = new THREE.Mesh(barGeometry, barMaterials);

    // barTexture1.repeat.set(0.25, 0.5);

    barMesh.castShadow = true;
    barMesh.receiveShadow = true;

    // barMaterial.bumpMap = barBump;
    // barMaterial.bumpScale = 0.02;

    barMesh.position.set(1, 1.25, -4);
    barMesh.rotation.y = 1;
    scene.add(barMesh);

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

// addController1();
// addController2();
// addGrip1();
// addGrip2();

addHouse();
let bar1 = addWoodenBar();
camera.lookAt(bar1.position);

let bulb1 = addLightBulb();
let bulb2 = addLightBulb(5, 8, 5);

let spotLight = addSpotlight();

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

let spotTarget = new THREE.Object3D(); // spotlight target
spotLight.target = spotTarget; // set spotLight target for spotLight

scene.add(spotTarget);

// - - - - - - - - - -
// Always at the end
// - - - - - - - - - -
animate();
