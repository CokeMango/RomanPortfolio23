import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import assets from "./Utils/assets";
import Camera from "./Camera.js"
import Theme from "./Theme";
import Renderer from "./Renderer";
import World from "./World/World";


export default class Experience {
  constructor(canvas) {
    if(Experience.instance){
        return Experience.instance

    }
    Experience.instance = this
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(assets);
    this.theme =new Theme();
    this.world = new World();
    
    

    this.time.on("update", ()=>{
      this.update();

    });

    this.sizes.on("resize", ()=>{
      this.resize();

    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();

}

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }
    
}
