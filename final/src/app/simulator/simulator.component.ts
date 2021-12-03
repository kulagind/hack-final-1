import { Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit, OnDestroy {
  @ViewChildren('canvas')
  private container: ElementRef<HTMLCanvasElement>;

  private canvas: HTMLCanvasElement;

  constructor(private readonly elementRef: ElementRef,
              private readonly globalState: GlobalStateService) {
  }

  async ngOnInit() {

    var buildUrl = 'assets/build/Build';
    var config = {
      dataUrl: buildUrl + '/dest.data',
      frameworkUrl: buildUrl + '/dest.framework.js',
      codeUrl: buildUrl + '/dest.wasm',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'JoeMoceri',
      productName: 'Unity Effects Pack',
      productVersion: '0.1',
      devicePixelRatio: 0
    };

    let container = document.querySelector('#unity-container') || new Element();
    var canvas: HTMLElement = document.querySelector('#unity-canvas') || new HTMLElement();
    var loadingBar: HTMLElement = document.querySelector('#unity-loading-bar') || new HTMLElement();
    var progressBarFull: HTMLElement = document.querySelector('#unity-progress-bar-full') || new HTMLElement();
    var fullscreenButton: HTMLElement = document.querySelector('#unity-fullscreen-button')!;
    var mobileWarning: HTMLElement = document.querySelector('#unity-mobile-warning')!;


    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = 'unity-mobile';
      config.devicePixelRatio = 1;
      mobileWarning.style.display = 'block';
      setTimeout(() => {
        mobileWarning.style.display = 'none';
      }, 5000);
    } else {
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }
    loadingBar.style.display = 'block';

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + '%';
    }).then((unityInstance: any) => {
      loadingBar.style.display = 'none';
      this.globalState.onPlay$.next(true);
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });

  }

  public ngOnDestroy() {
    this.globalState.onPlay$.next(false);
  }
}
