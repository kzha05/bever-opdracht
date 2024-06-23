import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Renderer from '../classes/Renderer.js';
import { threeJsContainer1 as container } from '../constants.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

if (!container) {
	console.error('Container element not found');
	throw new Error('Script stopped: Container element not found');
}

// Set alpha to true for transparency
const renderer = new Renderer(container, camera, scene);

camera.position.z = 4;
camera.position.y = 0.5;

const loader = new GLTFLoader();

loader.load('src/models/rifle.gltf', function (gltf) {
	const model = gltf.scene;
	scene.add(model);
	model.scale.set(5, 5, 5);

	const mixer = new THREE.AnimationMixer(model);
	const animations = gltf.animations;

	const clock = new THREE.Clock();

	function animate() {
		requestAnimationFrame(animate);
		const delta = clock.getDelta();
		mixer.update(delta);

		if (model) {
			model.rotation.y = -6.01;
			model.position.z = 2;
			model.position.x = 0.9;
		}

		renderer.render();
	}

	// Delay the start of the animations by 2 seconds
	setTimeout(() => {
		if (animations && animations.length) {
			animations.forEach((clip) => {
				const action = mixer.clipAction(clip);
				action.setLoop(THREE.LoopOnce);
				action.clampWhenFinished = true;
				action.play();
			});
		}
	}, 2000);

	animate();

}, undefined, function (error) {
	console.error(error);
});

