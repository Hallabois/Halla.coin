import * as THREE from 'three';
//import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
let renderer;

//const controls = new OrbitControls( camera, renderer.domElement ); //  !  without THREE.

const clock  = new THREE.Clock( true );	
let time;	// for animate

let light = new THREE.PointLight(0xffffff);
light.position.set(10, 50, 20);
scene.add(light);

const lightAmb = new THREE.AmbientLight(0xff77ff);
scene.add(lightAmb);

const coin = new THREE.Object3D();

const mtlLoader = new MTLLoader( );  //  !  without THREE.

var facematerial = new THREE.MeshPhongMaterial({
	map: new THREE.TextureLoader().load('assets/models/hallacoin50000.png'),
	normalMap: new THREE.TextureLoader().load('assets/models/Normal.png'),
	envMap: new THREE.TextureLoader().load('assets/models/hallacoin50000.png'),
	shininess: 100,
	reflectivity: 0.5,
	flatShading: false
});
var sidematerial = new THREE.MeshPhongMaterial({
	color: 0xD0B727,
	normalMap: new THREE.TextureLoader().load('assets/models/Normal.png'),
	envMap: new THREE.TextureLoader().load('assets/models/hallacoin50000.png'),
	shininess: 100,
	reflectivity: 0.5,
	flatShading: false
});

mtlLoader.load(
 'assets/models/hallacoin.mtl',

  function (materials) {
	materials.preload();
	const loader = new OBJLoader();
	loader.setMaterials( materials );
	loader.load(

	 'assets/models/hallacoin.obj',
		// called when resource is loaded
		function ( object ) {

			object.traverse( 
			function ( child ) {
				if ( child instanceof THREE.Object3D  ) {
					if(child.name.includes("Material.001")){
						child.material = facematerial;
					}
					if(child.name.includes("Reunat")){
						child.material = sidematerial;
					}
					//alert(child.name);
					//console.log(child);
						
						//scene.add( line );
				}
			} );

			coin.add( object );

		},
		// called when loading is in progresses
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened: ', error);

		}
	);
 }
);

scene.add(coin);
console.log(coin);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
//  cube.rotation.x += 0.01;
//  cube.rotation.y += 0.01;
  coin.rotation.y -= 0.01;
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize();
  animate();
}

window.addEventListener('resize', resize);
console.log(scene);
