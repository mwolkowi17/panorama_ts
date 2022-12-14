import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama1 } from './panorama1';
import { panorama3 } from './panorama3';



//panorama image

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./kawiarnia3.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama2 = new THREE.Mesh(geometry, material);

const navicon1 = new create_icon(20, -13, -30,'nav2');
const navicon2 = new create_icon(-7, -13, 40,'nav3');

panorama2.add(navicon1.main);
panorama2.add(navicon2.main);

navicon1.element.addEventListener('pointerdown', () => {
    scene.remove(panorama2);
    navicon1.element.style.visibility = 'hidden';
    navicon2.element.style.visibility = 'hidden';
    scene.add(panorama1);

})

navicon2.element.addEventListener('pointerdown', () => {
    scene.remove(panorama2);
    navicon1.element.style.visibility = 'hidden';
    navicon2.element.style.visibility = 'hidden';
    scene.add(panorama3);

})

