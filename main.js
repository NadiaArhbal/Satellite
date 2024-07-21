import * as THREE from './three.module.js';

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 3;
scene.add(camera);

var paper = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas:paper,alpha:true,antialias:false});  //alpha:true -> transparent
renderer.setSize(window.innerWidth,innerHeight); //mettre le rendu à la bonne taille

var light = new THREE.AmbientLight(0xffffff,1);
scene.add(light);

var shape = new THREE.SphereGeometry(1,64,64);
var material = new THREE.MeshBasicMaterial({color:0x0000ff});
var cube = new THREE.Mesh(shape,material);
scene.add(cube);

function animation()
{
    renderer.render(scene,camera);
    requestAnimationFrame(animation);
    cube.rotation.y += 0.01;
}

animation();
