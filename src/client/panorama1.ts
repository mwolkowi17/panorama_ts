import * as THREE from 'three';
import { create_icon } from './navigation_icon';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';

//panorama image

// const geometry = new THREE.SphereGeometry(500, 60, 40);
// // invert the geometry on the x-axis so that all of the faces point inward
// geometry.scale(- 1, 1, 1);

// const texture = new THREE.TextureLoader().load('./index.png');
// const material = new THREE.MeshBasicMaterial({ map: texture });

//export const panorama1 = new THREE.Mesh(geometry, material);
export const panorama1 = new panorama_form('./index.png').main;

export const navicon1 = new create_icon(-12, -18, -30,'nav1');

panorama1.add(navicon1.main);

navicon1.element.addEventListener('pointerdown', () => {
    panorama1.remove(navicon1.main)
    scene.remove(panorama1);
    //navicon1.element.style.visibility = 'hidden';
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon1.reset_size();

})

export  const infoicon1 = new create_info_icon(-30, 0, 30,'imageInfo1')
panorama1.add(infoicon1.main);

infoicon1.element.addEventListener('pointerdown',()=>{
console.log('pointer clicked');
const infodiv1 = new invoDiv();
})



