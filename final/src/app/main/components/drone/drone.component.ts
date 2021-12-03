import { Component } from '@angular/core';
import { droneAppearanceAnimation, droneShadowAnimation } from './drone.animation';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss'],
  animations: [
    droneAppearanceAnimation(),
    droneShadowAnimation()
  ]
})
export class DroneComponent {

}
