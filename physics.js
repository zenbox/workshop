import * as THREE from "three";
import {
    World,
    RigidBodyDesc,
    RigidBodyType,
    ColliderDesc,
    ColliderType,
    Vector3,
} from "rapier3d";

// Erstelle eine Physik-Welt
const gravity = new Vector3(0, -9.81, 0);
const world = World.new(gravity);

// Erstelle einen Boden
const groundSize = 10;
const groundHeight = 0.1;
const groundShape = ColliderDesc.cuboid(groundSize, groundHeight, groundSize);
const groundBodyDesc = RigidBodyDesc.newStatic().setTranslation(
    new Vector3(0, -groundHeight, 0)
);
const groundBody = world.createRigidBody(groundBodyDesc).unwrap();
world.createCollider(groundShape, groundBody.handle);

// Erstelle einen Würfel
const cubeSize = 1;
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.set(0, 5, 0);
const cubeShape = ColliderDesc.cuboid(cubeSize / 2, cubeSize / 2, cubeSize / 2);
const cubeBodyDesc = RigidBodyDesc.newDynamic().setTranslation(
    new Vector3(0, 5, 0)
);
const cubeBody = world.createRigidBody(cubeBodyDesc).unwrap();
world.createCollider(cubeShape, cubeBody.handle);

// Erstelle eine Szene und füge den Würfel hinzu
const scene = new THREE.Scene();
scene.add(cubeMesh);

// Erstelle eine Kamera und Renderer
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animations-Loop
function animate() {
    requestAnimationFrame(animate);

    // Aktualisiere die Physik-Welt
    world.step();

    // Aktualisiere die Position des Würfels basierend auf der Position des physikalischen Körpers
    const cubePosition = cubeBody.translation();
    cubeMesh.position.copy(cubePosition);

    // Rendere die Szene
    renderer.render(scene, camera);
}

// Starte die Animation
animate();
