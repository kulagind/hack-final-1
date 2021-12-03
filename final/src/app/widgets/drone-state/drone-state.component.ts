import { Component, OnInit } from '@angular/core';
import { filter, map, pluck } from 'rxjs/operators';
import { GlobalStateService } from '../../global-state.service';
import { UnityEventsService } from '../../main/services/unity-events.service';

@Component({
  selector: 'app-drone-state',
  templateUrl: './drone-state.component.html',
  styleUrls: ['./drone-state.component.scss']
})
export class DroneStateComponent  {

  public height$ = this.unityEventsService.events$
    .pipe(
      map(v => JSON.parse(v.detail)),
      filter(v => v.type === 'params'),
      pluck('height'),
      map(v => Math.floor(v))
    )

  constructor(public readonly globalState: GlobalStateService,
              public readonly unityEventsService: UnityEventsService) {
  }

}
