import * as THREE from "three";

export default class Studio {
    constructor(config = {}) {
        this._init();
        this._helper();
        this._camera();
        this._cameraPosition();
    }
    _init() {
        this._scene = new THREE.Scene();
    }
    _helper(s = 10) {
        this._axesHelper = new THREE.AxesHelper(s);
        this._gridHelper = new THREE.GridHelper(s, s);
    }
    _camera(
        c = {
            focalLength: 50,
            ratio: window.innerWidth / window.innerHeight,
            nearest: 0.1,
            farest: 2000,
        }
    ) {
        this.camera = new THREE.PerspectiveCamera(
            c.focalLength,
            c.ratio,
            c.nearest,
            c.farest
        );
    }
    _cameraPosition(c = { x: 1, y: 8, z: 30 }) {
        this.camera.position.set(c.x, c.y, c.z);
    }
    _background(c = 0x000000) {
        this._scene.background = new THREE.Color(0xffffff);
    }
    add(t = undefined) {
        if (t) this._scene.add(t);
    }
}
