import { Component } from '@angular/core';
import { GlobalStateService } from './global-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final';

  constructor(public readonly globalState: GlobalStateService) {
  }
}
