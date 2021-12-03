import { Component } from '@angular/core';
import { GlobalStateService } from './global-state.service';
import { UnityEventsService } from './main/services/unity-events.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final';

  public height$ = this.unityEventsService.events$
    .pipe(
      map(v => JSON.parse(v.detail)),
      filter(v => v.type === 'params')
    )

  constructor(public readonly globalState: GlobalStateService,
              public readonly unityEventsService: UnityEventsService) {
  }
}
