import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { XRButton } from "three/addons/webxr/XRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";

export default class Controller {
    constructor(studio, scene) {
        this._studio = studio;
        this._scene = this._studio._scene;
        this._initOrbitControl();
        this._initXrControl();
        this._addDomElements();
        this._addLeftController();
        this._addRightController();
        this._addLeftGrip();
        this._addRightGrip();
        this._addMarker();
    }
    _initOrbitControl() {
        this._orbitControls = new OrbitControls(
            this._studio.camera,
            renderer.domElement
        );
    }
    _initXrControl() {
        this._controllerModelFactory = new XRControllerModelFactory();
    }
    _update() {
        this._orbitControls.update();
    }
    _addLeftController() {
        this._leftController = renderer.xr.getController(0);
        this._leftController.addEventListener("selectstart", this._onDragStart);
        this._leftController.addEventListener("selectend", this._onDragEnd);
        this._leftController.add(rayMesh.clone());
        scene.add(this._leftController);
    }
    _addRightController() {
        this._rightController = renderer.xr.getController(1);
        this._rightController.addEventListener(
            "selectstart",
            this._onTeleportStart
        );
        this._rightController.addEventListener(
            "selectend",
            this._onTeleportEnd
        );
        this._rightController.add(rayMesh.clone());
        scene.add(this._rightController);
    }
    _addLeftGrip() {
        this._leftGrip = renderer.xr.getControllerGrip(0);
        this._leftGrip.add(
            this._controllerModelFactory.createControllerModel(this._leftGrip)
        );
        scene.add(this._leftGrip);
    }
    _addRightGrip() {
        this._rightGrip = renderer.xr.getControllerGrip(1);
        this._rightGrip.add(
            this._controllerModelFactory.createControllerModel(this._rightGrip)
        );
        scene.add(this._rightGrip);
    }
    _addMarker() {
        let _marker = new THREE.Mesh(
            new THREE.CircleGeometry(0.25, 32).rotateX(-Math.PI / 2),
            new THREE.MeshBasicMaterial({ color: 0x808080 })
        );
        this._scene.add(_marker);
    }
    _onDragStart(event) {
        this.userData.isSelecting = true;
        let _controller = event.target,
            _intersections = getRaycasterIntersections(_controller);
        if (_intersections.length > 0) {
            let _intersection = _intersections[0],
                _object = _intersection.object; // selected cube!
            _object.material.emissive.b = 1;
            _controller.attach(object);
            _controller.userData.selected = _object;
        }
        _controller.userData.targetRayMode = event.data.targetRayMode;
    }
    _onDragEnd(event) {
        this.userData.isSelecting = false;
        let _controller = event.target;
        if (_controller.userData.selected !== undefined) {
            let _object = _controller.userData.selected;
            // todo wtf?
            updateBodyFromMesh();
            _object.material.emissive.b = 0;
            // The global group of draggable objects
            group.attach(object);
            _controller.userData.selected = undefined;
        }
    }
    _onTeleportStart() {
        this.userData.isSelecting = true;
        //console.log("Suqueezebutton pressed");
    }
    _onTeleportEnd() {
        // console.log("Suqueezebutton unpressed");
        this.userData.isSelecting = false;
        if (INTERSECTION) {
            let _offsetPosition = {
                    x: -INTERSECTION.x,
                    y: -INTERSECTION.y,
                    z: -INTERSECTION.z,
                    w: 1,
                },
                _offsetRotation = new THREE.Quaternion(),
                _transform = new XRRigidTransform(
                    _offsetPosition,
                    _offsetRotation
                ),
                _teleportSpaceOffset =
                    baseReferenceSpace.getOffsetReferenceSpace(_transform);
            renderer.xr.setReferenceSpace(_teleportSpaceOffset);
        }
    }
    _addDomElements() {
        document.body.appendChild(XRButton.createButton(this._renderer));
    }
}
