import { Component } from '@angular/core';
import { mainAppearanceLeftAnimation, mainAppearanceRightAnimation } from './main.animation';
import { Router } from "@angular/router";
import { UnityEventsService } from "../../services/unity-events.service";
import { Observable } from "rxjs";
import { LoginService } from "../../../login/login/login.service";
import {SimulatorService} from "../../../simulator/simulator.service";

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
    public login: LoginService,
    private simulatorService: SimulatorService,
  ) {
    this.unityEvents$ = unityEventsService.events$;
  }

  handleStart(): void {
    this.router.navigate(['../practice']).then(() => {
    });
  }

  setLearning(value: boolean) {
    this.simulatorService.isLearning = value;
  }
}
