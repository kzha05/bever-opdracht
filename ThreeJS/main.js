import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 3, 1 );
const material = new THREE.MeshBasicMaterial( { color: "red" } );
const cube = new THREE.Mesh( geometry, material );


camera.position.z = 5;

const loader = new GLTFLoader();

loader.load('models/RigV003.gltf', function (gltf) {
    
    const model = gltf.scene;
    scene.add(model);

    
    model.scale.set(5, 5, 5); 
    model.position.y = -6;

    function animate() {
        requestAnimationFrame(animate);
    
        
        if (model) {
            model.rotation.y += 0.01; 
            model.rotation.z += 0.01;
        }
    
        renderer.render(scene, camera);
    }
    
    animate();

}, undefined, function (error) {
    console.error(error);
});


