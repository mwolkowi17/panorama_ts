import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama2 } from './panorama2';
import { panorama_form } from './panorama_create';

// const geometry = new THREE.SphereGeometry(500, 60, 40);
// // invert the geometry on the x-axis so that all of the faces point inward
// geometry.scale(- 1, 1, 1);

// const texture = new THREE.TextureLoader().load('./kawiarnia4.png');
// const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama3 = new panorama_form('./kawiarnia4.png').main;

const navicon1 = new create_icon(14, -18, 30,'nav4');

panorama3.add(navicon1.main)

navicon1.element.addEventListener('pointerdown', () => {
    scene.remove(panorama3);
    navicon1.element.style.visibility = 'hidden';
    scene.add(panorama2);
    

})

