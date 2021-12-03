import { Component } from '@angular/core';
import { mainAppearanceLeftAnimation, mainAppearanceRightAnimation } from './main.animation';
import { Router } from "@angular/router";
import { UnityEventsService } from "../../services/unity-events.service";
import { Observable } from "rxjs";

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

  unityEvents$: Observable<any>;

  constructor(
    private router: Router,
    private unityEventsService: UnityEventsService,
  ) {
    this.unityEvents$ = unityEventsService.events$;
  }

  handleStart(): void {
    this.router.navigate(['../practice']);
  }

}
