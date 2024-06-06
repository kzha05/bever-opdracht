import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const container = document.getElementById('canvas');
document.body.appendChild(container);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(1700, 800);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25; 
controls.screenSpacePanning = false; 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load("img/textures/gun/rem700_Gun_bake_low_Gun_Height.png");

const bgGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
const bgMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture });
const backgroundPlane = new THREE.Mesh(bgGeometry, bgMaterial);
backgroundPlane.position.z = -462; 
scene.add(backgroundPlane);

camera.position.z = 5;

const loader = new GLTFLoader();

loader.load('img/rem700.gltf', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(5, 5, 5);

    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
    }

    animate();

}, undefined, function (error) {
    console.error(error);
});
