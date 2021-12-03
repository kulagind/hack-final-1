import { Component } from '@angular/core';
import { GlobalStateService } from './global-state.service';
import { UnityEventsService } from './main/services/unity-events.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { GameService } from "./main/services/game.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final';

  connectionLost$: Observable<number>;

  constructor(public readonly globalState: GlobalStateService,
              public gameService: GameService,
              private router: Router,
              public readonly unityEvents: UnityEventsService) {

    const connectionEvents = this.unityEvents.events$.pipe(
      map((event) => JSON.parse(event.detail)),
      filter((detail) => ['signalLose', 'gotSignal'].includes(detail.type)),
    );

    this.gameService.stats$.subscribe(console.log);

    this.connectionLost$ = connectionEvents.pipe(
      map((event) => event.time),
    );

    this.connectionLost$.subscribe();

    this.gameService.gameOver$.subscribe(() => {
      this.router.navigate(["./simulation-complete"]);
    });
  }
}
