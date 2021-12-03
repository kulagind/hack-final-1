import { AfterViewInit, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import * as Three from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss']
})
export class PracticePageComponent implements AfterViewInit {

  @ViewChild('pageElem') pageElem: ElementRef<HTMLDivElement> | undefined;
  scene!: Three.Scene;
  camera!: Three.PerspectiveCamera;
  threeRenderer!: Three.Renderer;
  loader = new GLTFLoader();

  model: Three.Object3D | undefined;

  constructor(
    private renderer: Renderer2,
    private zone: NgZone,
  ) {
    this.initScene();
    this.initCamera();
    this.initRenderer();
  }

  initScene(): void {
    this.scene = new Three.Scene();
    this.scene.background = new Three.Color('white');
    const light = new Three.AmbientLight( 0x404040, 5 ); // soft white light
    this.scene.add( light );
  }

  initCamera(): void {
    this.camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  }

  initRenderer(): void {
    this.threeRenderer = new Three.WebGLRenderer();
    this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngAfterViewInit(): void {
    if (this.pageElem) {
      this.renderer.appendChild(this.pageElem.nativeElement, this.threeRenderer.domElement);
      this.renderSkull();
      this.zone.runOutsideAngular(() => {
        this.animate();
      });
    }
  }

  renderSkull(): void {
    this.loader.load('assets/skull/scene.gltf', (scene: { scene: { children: any[]; }; }) => {
      this.model = scene.scene.children[0];
      this.camera.position.z = 5;
      this.scene.add(this.model as any);
    }, undefined, (error: any) => {
      console.log(error);
    });
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    if (this.model) {
      this.model.rotation.z += 0.01;
    }

    this.threeRenderer.render(this.scene, this.camera);
  }

}
