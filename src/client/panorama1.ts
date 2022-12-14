import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { panorama2 } from './panorama2';
import { scene } from './client';

//panorama image

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./index.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama1 = new THREE.Mesh(geometry, material);

const navicon1 = new create_icon(-12, -18, -30,'nav1');

panorama1.add(navicon1.main);

navicon1.element.addEventListener('pointerdown', () => {
    scene.remove(panorama1);
    navicon1.element.style.visibility = 'hidden';
    scene.add(panorama2);

})



