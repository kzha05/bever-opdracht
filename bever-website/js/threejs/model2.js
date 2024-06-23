import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { threeJsContainer2 as container } from '../constants.js';
import Renderer from '../classes/Renderer.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1400);

// Check if the container is found and attach the renderer to it
if (!container) {
	console.error('Container element not found');
	throw new Error('Script stopped: Container element not found');
}

// Set alpha to true for transparency
const renderer = new Renderer(container, camera, scene);

const loader = new GLTFLoader();

loader.load('src/models/landscape.gltf', function (gltf) {
	const model = gltf.scene;

	// Create a group and add the model to it
	const group = new THREE.Group();
	group.add(model);
	scene.add(group);

	model.scale.set(5, 5, 5);
	// Position the model within the group
	model.position.y = -25;

	// Position the group
	group.position.z = 50;

	// // Ensure the controls target the group
	// controls.target.copy(group.position);
	// controls.update();

	function animate() {
		requestAnimationFrame(animate);

		if (group) {
			group.rotation.y += 0.001;
		}

		renderer.render();
	}

	animate();

}, undefined, function (error) {
	console.error(error);
});

// Set the initial position of the camera
camera.position.set(0, 0, 100);

