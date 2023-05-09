// Importieren der Bibliotheken
import * as THREE from "three";

import { XRButton } from "three/addons/webxr/XRButton.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

import { BoxLineGeometry } from "three/addons/geometries/BoxLineGeometry.js";
import TWEEN from "three/addons/libs/tween.module.js";

// Einrichtung der Szene, der Kamera und des Renderers

let cube,
    room,
    light,
    controller1,
    controller2,
    controllerGrip1,
    controllerGrip2,
    w = window.innerWidth,
    h = window.innerHeight;

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

const controls = new OrbitControls(camera, renderer.domElement);
const controllerModelFactory = new XRControllerModelFactory();

function addRenderer() {
    renderer.setSize(w, h);
    renderer.xr.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);
    document.body.appendChild(XRButton.createButton(renderer));
}

function animate() {
    // requestAnimationFrame(animate);
    renderer.setAnimationLoop(render);
}

function render() {
    handleController(controller1);
    handleController(controller2);

    // const delta = clock.getDelta() * 0.8; // slow down simulation
    renderer.render(scene, camera);

    controls.update();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    tween(spotLight1);
    tween(spotLight2);
    tween(spotLight3);

    // setTimeout(animate, 5000);
}

function addCube() {
    // Erstellung eines Würfels
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 1, -3);
    scene.add(cube);
}

function addRoom() {
    room = new THREE.LineSegments(
        new BoxLineGeometry(6, 6, 6, 10, 10, 10),
        new THREE.LineBasicMaterial({ color: 0xffcc00 })
    );
    room.geometry.translate(0, 3, 0);
    scene.add(room);
}

function setCamera() {
    // Positionierung der Kamera
    // camera.position.set(0, 1.7, 3);
    camera.position.set(46, 22, -21);
}

function onSelectStart() {
    this.userData.isSelecting = true;
}

function onSelectEnd() {
    this.userData.isSelecting = false;
}

function addController1() {
    controller1 = renderer.xr.getController(0);
    controller1.addEventListener("selectstart", onSelectStart);
    controller1.addEventListener("selectend", onSelectEnd);
    controller1.addEventListener("connected", function (event) {
        this.add(buildController(event.data));
    });
    controller1.addEventListener("disconnected", function () {
        this.remove(this.children[0]);
    });
    scene.add(controller1);
}

function addController2() {
    controller2 = renderer.xr.getController(1);
    controller2.addEventListener("selectstart", onSelectStart);
    controller2.addEventListener("selectend", onSelectEnd);
    controller2.addEventListener("connected", function (event) {
        this.add(buildController(event.data));
    });
    controller2.addEventListener("disconnected", function () {
        this.remove(this.children[0]);
    });
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

function buildController(data) {
    let geometry, material;

    switch (data.targetRayMode) {
        case "tracked-pointer":
            geometry = new THREE.BufferGeometry();
            geometry.setAttribute(
                "position",
                new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3)
            );
            geometry.setAttribute(
                "color",
                new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)
            );

            material = new THREE.LineBasicMaterial({
                vertexColors: true,
                blending: THREE.AdditiveBlending,
            });

            return new THREE.Line(geometry, material);

        case "gaze":
            geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(
                0,
                0,
                -1
            );
            material = new THREE.MeshBasicMaterial({
                opacity: 0.5,
                transparent: true,
            });
            return new THREE.Mesh(geometry, material);
    }
}

function handleController(controller) {
    if (controller.userData.isSelecting) {
        // const object = room.children[count++];
        // object.position.copy(controller.position);
        // let base = 10;
        // object.userData.velocity.x = base + (Math.random() - 0.5) * 3;
        // object.userData.velocity.y = (Math.random() - 0.5) * 3;
        // object.userData.velocity.z = Math.random() - 9;
        // object.userData.velocity.applyQuaternion(controller.quaternion);
        // if (count === room.children.length) count = 0;
    }
}

function setSceneProperties() {
    scene.background = new THREE.Color(0x000000);
}

function addLights() {
    // scene.add(new THREE.HemisphereLight(0x606060, 0x404040));

scene.add(new THREE.AmbientLight(0, 5, 0));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1).normalize();
    // scene.add(light);
}
// - - - - - - - - - -

addRenderer();
setSceneProperties();
// addRoom();
setCamera();
addLights();
addCube();

addController1();
addController2();
addGrip1();
addGrip2();

function createSpotlight(color) {
    const newObj = new THREE.SpotLight(color, 2);

    newObj.castShadow = true;
    newObj.angle = 0.3;
    newObj.penumbra = 0.2;
    newObj.decay = 2;
    newObj.distance = 50;

    return newObj;
}
function tween(light) {
    new TWEEN.Tween(light)
        .to(
            {
                angle: Math.random() * 0.7 + 0.1,
                penumbra: Math.random() + 1,
            },
            Math.random() * 3000 + 2000
        )
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

    new TWEEN.Tween(light.position)
        .to(
            {
                x: Math.random() * 30 - 15,
                y: Math.random() * 10 + 15,
                z: Math.random() * 30 - 15,
            },
            Math.random() * 3000 + 2000
        )
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
}

const matFloor = new THREE.MeshPhongMaterial({ color: 0x808080 });
const matBox = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

const geoFloor = new THREE.PlaneGeometry(2000, 2000);
const geoBox = new THREE.BoxGeometry(1.5, 0.5, 1);

const mshFloor = new THREE.Mesh(geoFloor, matFloor);
mshFloor.rotation.x = -Math.PI * 0.5;
const mshBox = new THREE.Mesh(geoBox, matBox);

const ambient = new THREE.AmbientLight(0x111111);

const spotLight1 = createSpotlight(0xff7f00);
const spotLight2 = createSpotlight(0x00ff7f);
const spotLight3 = createSpotlight(0x7f00ff);

let lightHelper1, lightHelper2, lightHelper3;

spotLight1.position.set(15, 40, 45);
spotLight2.position.set(0, 40, 35);
spotLight3.position.set(-15, 40, 45);

lightHelper1 = new THREE.SpotLightHelper(spotLight1);
lightHelper2 = new THREE.SpotLightHelper(spotLight2);
lightHelper3 = new THREE.SpotLightHelper(spotLight3);

mshFloor.receiveShadow = true;
mshFloor.position.set(0, -3, 0);

mshBox.castShadow = true;
mshBox.receiveShadow = true;
mshBox.position.set(0, 0.2, -2);

scene.add(mshFloor);
scene.add(mshBox);
scene.add(ambient);
scene.add(spotLight1, spotLight2, spotLight3);
scene.add(lightHelper1, lightHelper2, lightHelper3);

// - - - - - - - - - -
animate();
