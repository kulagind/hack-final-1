import { Component } from '@angular/core';
import { GlobalStateService } from './global-state.service';
import { UnityEventsService } from './main/services/unity-events.service';
import { filter, map } from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final';

  connectionLost$: Observable<number>;

  constructor(public readonly globalState: GlobalStateService,
              public readonly unityEvents: UnityEventsService) {

    const connectionEvents = this.unityEvents.events$.pipe(
      map((event) => JSON.parse(event.detail)),
      filter((detail) => ['signalLose', 'gotSignal'].includes(detail.type))
    );

    this.connectionLost$ = connectionEvents.pipe(
      map((event) => event.time),
    );

    this.connectionLost$.subscribe();
  }
}
