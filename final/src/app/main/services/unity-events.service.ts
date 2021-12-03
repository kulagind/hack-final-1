import { Injectable } from '@angular/core';
import { fromEvent, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnityEventsService {

  events$: Observable<any>;

  constructor() {
    this.events$ = fromEvent(document, "unityEvent");
  }
}
