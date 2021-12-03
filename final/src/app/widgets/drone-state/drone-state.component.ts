import { Component } from '@angular/core';
import { filter, map, mapTo, pluck, switchMap, tap } from 'rxjs/operators';
import { GlobalStateService } from '../../global-state.service';
import { UnityEventsService } from '../../main/services/unity-events.service';
import { fromEvent, interval, merge, Observable, of } from "rxjs";
import { GameService } from "../../main/services/game.service";
import {TaskService} from "../../simulator/task.service";

@Component({
  selector: 'app-drone-state',
  templateUrl: './drone-state.component.html',
  styleUrls: ['./drone-state.component.scss']
})
export class DroneStateComponent {

  keyDown = false;
  pressedKeys = [];

  public height$ = this.unityEventsService.events$
    .pipe(
      map(v => JSON.parse(v.detail)),
      filter(v => v.type === 'params'),
      pluck('height'),
      map(v => Math.floor(v))
    )

  public power$: Observable<number> = interval(1000).pipe(
    map(v => 100 - v)
  );

  public speed$: Observable<number> = merge(
    fromEvent(document, "keydown").pipe(
      // @ts-ignore
      filter((key) => !this.pressedKeys.find((item) => item === key.key)),
      tap((event) => {
        // @ts-ignore
        this.pressedKeys.push(event.key)
      }),
      filter(() => this.pressedKeys.length < 2),
      // @ts-ignore
      map(() => true)
    ),
    fromEvent(document, "keyup").pipe(
      tap((event) => {
        // @ts-ignore
        this.pressedKeys = this.pressedKeys.filter((key) => key !== event.key)
      }),
      filter(() => !this.pressedKeys.length),
      mapTo(false)
    ),
  ).pipe(
    switchMap((val) => {
      return val ? interval(20).pipe(filter((v) => v <= 30)) : of(0)
    })
  );


  constructor(public readonly globalState: GlobalStateService,
              public readonly gameService: GameService,
              public readonly unityEventsService: UnityEventsService,
              public readonly taskService: TaskService,
  ) {
  }

}
