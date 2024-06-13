import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Get the container element from the HTML
const container = document.getElementById('canvas3');

// Check if the container is found and attach the renderer to it
if (container) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
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

    const loader = new GLTFLoader();

    loader.load('img/models/jager.gltf', function (gltf) {
        
        const model = gltf.scene;
        scene.add(model);

        model.scale.set(5, 5, 5); 


        function animate() {
            requestAnimationFrame(animate);
            
            if (model) {
                model.rotation.y += 0.001; 
            }
            renderer.render(scene, camera);
        }
        animate();

    }, undefined, function (error) {
        console.error(error);
    });

    // Update the camera aspect ratio and renderer size when the window is resized
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // Set the initial position of the camera
    camera.position.z = 100;
} else {
    console.error('Container element not found');
}
