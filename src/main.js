import "./style.css";

import {
    AmbientLight,
    BoxGeometry,
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/* DOM access */
const canvas = document.getElementById("scene");

/* Global Constants */
const scene = new Scene();
const camera = new PerspectiveCamera(
    75,
    canvas.width / canvas.height,
    0.1,
    1000,
);
const renderer = new WebGLRenderer({
    canvas,
});
const controls = new OrbitControls(camera, canvas);

/* Lighting */
const ambientLight = new AmbientLight(0xffffff, 0.7);
const directionalLight = new DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(100, 100, 10);
scene.add(ambientLight, directionalLight);

/* Objects */
const cube = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({ color: 0x00ffff }),
);
scene.add(cube);

/* Functions */
const handleWindowResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderer.setSize(canvas.width, canvas.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();

    controls.update();
};

const init = () => {
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;

    camera.position.set(0, 1, 5);
    controls.update();

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("load", handleWindowResize);
};

const update = (delta) => {
    cube.rotation.x += 0.001 * Math.random() * delta;
    cube.rotation.y += 0.001 * Math.random() * delta;
};

const render = () => {
    controls.update();
    renderer.render(scene, camera);
};

export const main = () => {
    let lastTime = new Date().getTime();

    const loop = () => {
        window.requestAnimationFrame(loop);
        const currentTime = new Date().getTime();
        const delta = currentTime - lastTime;
        lastTime = currentTime;

        update(delta);
        render();
    };

    init();
    loop();
};

/* Main program (function calls) */
main();
