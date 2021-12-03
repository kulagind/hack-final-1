import { Injectable } from '@angular/core';
import { fromEvent, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnityEventsService {

  events$: Observable<any>;
  parsedEvents$: Observable<any>;

  constructor() {
    this.events$ = fromEvent(document, "unityEvent");
    this.parsedEvents$ = fromEvent(document, "unityEvent")
      .pipe(
        // @ts-ignore
        map((value: string) => JSON.parse(value.detail))
      )
  }
}
