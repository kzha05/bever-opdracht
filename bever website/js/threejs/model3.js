import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Get the container element from the HTML
const container = document.getElementById('canvas3');

// Check if the container is found and attach the renderer to it
if (container) {
    // Set alpha to true for transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0); // Set the clear color to transparent
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.25; 
    controls.screenSpacePanning = false; 
    controls.target.set(0, 0, 0); // Set the target to the origin

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();

    loader.load('img/models/lenapeModel.glb', function (gltf) {
        const model = gltf.scene;

        // Create a group and add the model to it
        const group = new THREE.Group();
        group.add(model);
        scene.add(group);

        model.scale.set(5, 5, 5);
        // Position the model within the group
        model.position.y = -2;

        // Position the group
        group.position.z = 90;

        // Ensure the controls target the group
        controls.target.copy(group.position);
        controls.update();

        function animate() {
            requestAnimationFrame(animate);

            if (group) {
                group.rotation.y += 0.006;
            }
            controls.update(); // Update controls every frame
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
    camera.position.set(0, 0, 100); // Move the camera back
    controls.update(); // Update the controls with the new camera position
} else {
    console.error('Container element not found');
}
