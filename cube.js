import * as THREE from "three";

import { BoxLineGeometry } from "three/addons/geometries/BoxLineGeometry.js";
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

THREE.ColorManagement.enabled = false; // TODO: Consider enabling color management.

let camera, scene, renderer;
let controller1, controller2;
let controllerGrip1, controllerGrip2;

let room, controls, cube;

let count = 0;
let radius = 0.08;
let normal = new THREE.Vector3();
const relativeVelocity = new THREE.Vector3();

const clock = new THREE.Clock();
// Setup
init();
// Loop
animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x505050);

    camera = new THREE.PerspectiveCamera(
        50, // Brennweite
        window.innerWidth / window.innerHeight, // Bildverhältnis
        0.1, // der naheste sichtbare Entfernung
        10 // die fernste sichtbare Entfernung
    );

    // Position, an der der User als "Avatar" steht
    // x, y z
    // y ist die Augenhöhe (1,6m), die Maßeinheit sind Meter
    // z = 3 heisst, du stehst 3 Meter vor dem Weltursprung (0,0,0)
    camera.position.set(0, 1.7, 3);

    // Der Kubus als Raum
    room = new THREE.LineSegments(
        new BoxLineGeometry(6, 6, 6, 10, 10, 10),
        new THREE.LineBasicMaterial({ color: 0xffcc00 })
    );
    room.geometry.translate(0, 3, 0);
    scene.add(room);

    // Licht
    // es gibt verschiedene Lichter, z.B.
    // directional, spotlight, ambient ...
    scene.add(new THREE.HemisphereLight(0x606060, 0x404040));

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // - - - - - - - - - -
    // - - - - - - - - - -
    // - - - - - - - - - -
    // Körper im Raum
    // Eine Grundgeometrie
    // Alle Geometrien hier ...
    // - - - - - - - - - -

    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 1, 0);
    cube.rotation.set(1, 1, 1);

    scene.add(cube);

    // - - - - - - - - - -
    // - - - - - - - - - -
    // - - - - - - - - - -

    // Einrichten des Rendereres (Canvas zum Abbilden von WebGL)
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // - - - - - - - - - -
    // XR statt VR
    // - - - - - - - - - -
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    // - - - - - - - - - -
    // Der "Enter XR" Button als Fertig-Bauteil
    // - - - - - - - - - -
    document.body.appendChild(XRButton.createButton(renderer));

    // - - - - - - - - - -
    // Die Controller-Steuerung
    // - - - - - - - - - -

    // Orbitcontrol
    // Browser Steuerung mit der Maus (ohne VR Brille)
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    function onSelectStart() {
        this.userData.isSelecting = true;
    }

    function onSelectEnd() {
        this.userData.isSelecting = false;
    }

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

    // The XRControllerModelFactory will automatically fetch controller models
    // that match what the user is holding as closely as possible. The models
    // should be attached to the object returned from getControllerGrip in
    // order to match the orientation of the held device.

    const controllerModelFactory = new XRControllerModelFactory();

    controllerGrip1 = renderer.xr.getControllerGrip(0);
    controllerGrip1.add(
        controllerModelFactory.createControllerModel(controllerGrip1)
    );
    scene.add(controllerGrip1);

    controllerGrip2 = renderer.xr.getControllerGrip(1);
    controllerGrip2.add(
        controllerModelFactory.createControllerModel(controllerGrip2)
    );
    scene.add(controllerGrip2);

    window.addEventListener("resize", onWindowResize);
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
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
function handleController(controller) {
    if (controller.userData.isSelecting) {
    }
}
function animate() {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.005;
    controls.update();

    renderer.setAnimationLoop(render);
    requestAnimationFrame(animate);
}
function render() {
    handleController(controller1);
    handleController(controller2);

    const delta = clock.getDelta() * 0.8; // slow down simulation

    renderer.render(scene, camera);
}
