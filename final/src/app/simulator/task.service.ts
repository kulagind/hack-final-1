import {Injectable} from "@angular/core";
import {BehaviorSubject, interval, ReplaySubject} from "rxjs";
import {UnityEventsService} from "../main/services/unity-events.service";
import {filter, take} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  completedTask = new BehaviorSubject<string | null>(null);
  currentTask = new ReplaySubject<string>(1);

  constructor(private events: UnityEventsService) {
    this.events.parsedEvents$
      .pipe(
        filter(val => val.type === 'task_start')
      )
      .subscribe(value => {
        this.currentTask.next(value.text || '');
      });

    this.events.parsedEvents$
      .pipe(
        filter(val => val.type === 'task_complete')
      )
      .subscribe(value => {
        this.completedTask.next(value.text || '');
        interval(1000).pipe(
          take(6)
        ).subscribe(value => {
          if (value === 5) {
            this.completedTask.next(null);
          }
        });
      });
  }
}
