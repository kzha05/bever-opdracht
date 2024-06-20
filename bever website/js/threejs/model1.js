import * as THREE from '../libs/three.module.js';
import { OrbitControls } from '../libs/OrbitControls.js';
import * as THREE from 'three'; // Importing the entire 'three' library


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Get the container element from the HTML
const container = document.getElementById('canvas1');

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    camera.position.z = 4;
    camera.position.y = 0.5;

    const loader = new GLTFLoader();

    loader.load('img/models/Rem700ColorAnimation.gltf', function (gltf) {
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
            controls.update();  // Update the OrbitControls
            renderer.render(scene, camera);
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

    // Update the camera aspect ratio and renderer size when the window is resized
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
} else {
    console.error('Container element not found');
}