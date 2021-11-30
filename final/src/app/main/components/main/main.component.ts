import { Component } from '@angular/core';
import { mainAppearanceLeftAnimation, mainAppearanceRightAnimation } from './main.animation';
import { Router } from "@angular/router";

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

  constructor(
    private router: Router
  ) {
  }

  handleStart(): void {
    this.router.navigate(['../practice']);
  }

}
