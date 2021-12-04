import {Injectable} from "@angular/core";
import {BehaviorSubject, interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {
  public isLearning: boolean = false;
  public isKeyboardShown = new BehaviorSubject<boolean | null>(null);

  showKeyboard() {
    this.isKeyboardShown.next(true);
    interval(1000).pipe(
      take(6)
    ).subscribe(value => {
      if (value === 5) {
        this.isKeyboardShown.next(null);
      }
    });
  }
}
