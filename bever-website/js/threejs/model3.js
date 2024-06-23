import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Renderer from '../classes/Renderer.js';
import { threeJsContainer3 as container } from '../constants.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

if (!container) {
	console.error('Container element not found');
	throw new Error('Script stopped: Container element not found');
}

const renderer = new Renderer(container, camera, scene);

const loader = new GLTFLoader();

loader.load('src/models/lenapeModel.glb', function (gltf) {
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

	function animate() {
		requestAnimationFrame(animate);

		if (group) {
			group.rotation.y += 0.006;
		}
		renderer.render();
	}

	animate();

}, undefined, function (error) {
	console.error(error);
});

camera.position.set(0, 0, 100);
