import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, interval, merge, Observable, of } from "rxjs";
import { UnityEventsService } from "./unity-events.service";
import { count, debounceTime, filter, map, mapTo, startWith, take, tap, throttle, throttleTime } from "rxjs/operators";

export interface GameStats {
  max_speed: number;
  danger_close: number;
  hits: number;
  max_height: number;
  time: number;
  status: string;
  points: number;
  connection_losses: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameOver$: Observable<void>;
  healthPoints$: Observable<number>;
  stats$ = new BehaviorSubject<GameStats>({
    danger_close: -1,
    hits: -1,
    max_height: 0,
    max_speed: 35,
    points: 0,
    status: "",
    time: 0,
    connection_losses: -0,
  });
  gameInProgress = new BehaviorSubject(false);
  gameStarted: any;

  battery$ = interval(1000).pipe(
    map(v => 100 - v)
  );

  constructor(
    private unityEvents: UnityEventsService,
  ) {

    let hits = 0;
    const parsedEvents = this.unityEvents.parsedEvents$;

    this.gameInProgress.subscribe((value) => {
      if (value) {
        this.gameStarted = performance.now();
      }
    });

    this.healthPoints$ = parsedEvents.pipe(
      filter((event) => event.type === 'hit'),
      tap(() => {
        hits++
      }),
      map(() => 100 - (100 / 8) * hits),
    );

    combineLatest([
      parsedEvents.pipe(
        startWith({ type: 'hit' }),
        filter((event) => event.type === 'hit'),
        map(() => this.stats$.getValue().hits + 1),
      ),
      parsedEvents.pipe(
        startWith({ type: 'params', height: 0 }),
        filter((event) => event.type === 'params' && event.height !== undefined),
        map((event) => {
          return this.stats$.getValue().max_height > event.height ? this.stats$.getValue().max_height : event.height
        }),
      ),
      parsedEvents.pipe(
        startWith({ type: 'close' }),
        filter((event) => event.type === 'close'),
        map(() => this.stats$.getValue().danger_close + 1),
      ),
      parsedEvents.pipe(
        startWith({ type: 'signalLose' }),
        filter((event) => event.type === 'signalLose'),
        debounceTime(5000),
        map(() => this.stats$.getValue().connection_losses + 1),
      )
    ]).subscribe(([hits, max_height, danger_close, connection_losses]) => {
      this.stats$.next({
        hits,
        danger_close,
        max_height,
        time: 0,
        status: "ok",
        points: 0,
        max_speed: 35,
        connection_losses
      });
      // console.log(this.stats$.getValue());
    });

    // @ts-ignore
    this.gameOver$ = merge(
      this.unityEvents.parsedEvents$.pipe(
        filter((detail) => detail.type === 'signalLose' && detail.time >= 5),
        mapTo(false),
        take(1),
      ),
      this.unityEvents.parsedEvents$.pipe(
        filter((detail) => detail.type === 'task_complete' && detail.text === 'Приземлиться и выключить двигатель'),
        mapTo(true),
        take(1),
      ),
      this.healthPoints$.pipe(
        filter((hp) => hp <= 15),
        mapTo(false),
        take(1),
      ),
      this.unityEvents.parsedEvents$.pipe(
        filter((detail) => detail.type === 'death'),
        mapTo(false),
        take(1),
      ),
      this.battery$.pipe(
        filter((number) => number <= 1),
        mapTo(false),
      ),
      fromEvent(document, "keydown").pipe(
        // @ts-ignore
        filter((event) => event.key === "Escape"),
        mapTo(true),
        take(1),
      ),
    ).pipe(
      take(1),
      tap((value) => {
        this.gameInProgress.next(false);
        this.stats$.next({
          ...this.stats$.getValue(),
          status: value ? "success" : "fail",
          points: Math.random() * 100,
          time: performance.now() - this.gameStarted,
        })
      })
    );

  }
}
