import * as THREE from "three";

export default class Plot {
    constructor(studio) {
        this._studio = studio;
        this._scene = this._studio._scene;
        this._renderer = new THREE.WebGLRenderer({ antialias: true });
        this._init();
        this._initXr();
        this._initShadowMap();
        this._addDomElements();
    }
    _init() {
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        this._renderer.setPixelRatio(window.devicePixelRatio);
    }
    _initXr() {
        this._renderer.xr.enabled = true;
        this._renderer.xr.addEventListener(
            "sessionstart",
            () => (baseReferenceSpace = renderer.xr.getReferenceSpace())
        );
    }
    _initShadowMap() {
        this._renderer.shadowMap.enabled = true;
        this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    _addDomElements() {
        document.body.appendChild(this._renderer.domElement);
    }
}
