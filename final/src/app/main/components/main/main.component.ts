import { Component } from '@angular/core';
import { mainAppearanceLeftAnimation, mainAppearanceRightAnimation } from './main.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    mainAppearanceLeftAnimation(),
    mainAppearanceRightAnimation()
  ]
})
export class MainComponent {

}
