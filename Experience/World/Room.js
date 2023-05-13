import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    
    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };


    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      if (child.name === "Screen") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
    });
    const width = 1;
    const height = 1;
    const intensity = 3;
    const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
    rectLight.position.set( -4, 15, 2 );
    rectLight.rotation.x = -Math.PI / 2;
    rectLight.rotation.z = -Math.PI / 3;
    
    this.actualRoom.add( rectLight );
    
    


    const width1 = 1;
    const height1 = 1;
    const intensity1 = 2;
    const rectLight2 = new THREE.RectAreaLight( 0xffffff, intensity1,  width1, height1 );
    rectLight2.position.set( 2, 12, 2 );
   rectLight2.lookAt(20,16,-20);
    
    this.actualRoom.add( rectLight2 );
    
    
    

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.11, 0.11, 0.11);
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e)=> {
      //console.log(e);
      this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * .1;

    });

  }

  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.actualRoom.rotation.y = this.lerp.current;

  }
}
