import { AfterViewInit, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import * as Three from 'three';

@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss']
})
export class PracticePageComponent implements AfterViewInit {

  @ViewChild('pageElem') pageElem: ElementRef<HTMLDivElement> | undefined;
  scene: Three.Scene;
  camera: Three.PerspectiveCamera;
  threeRenderer: Three.Renderer;
  cube: Three.Mesh | undefined;

  constructor(
    private renderer: Renderer2,
    private zone: NgZone,
  ) {
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.threeRenderer = new Three.WebGLRenderer();
    this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngAfterViewInit(): void {
    if (this.pageElem) {
      this.renderer.appendChild(this.pageElem.nativeElement, this.threeRenderer.domElement);
      this.renderCube();
      this.zone.runOutsideAngular(() => {
        this.animate();
      });
    }
  }

  renderCube(): void {
    const geometry = new Three.BoxGeometry();
    const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new Three.Mesh( geometry, material );
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    if (this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }

    this.threeRenderer.render(this.scene, this.camera);
  }

}
