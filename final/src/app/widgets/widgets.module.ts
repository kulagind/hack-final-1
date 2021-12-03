import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionWidgetComponent } from './mission-widget/mission-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { DroneStateComponent } from './drone-state/drone-state.component';
import { PowerWidgetComponent } from './power-widget/power-widget.component';
import { DroneStateBarComponent } from './drone-state-bar/drone-state-bar.component';



@NgModule({
  declarations: [
    MissionWidgetComponent,
    DroneStateComponent,
    PowerWidgetComponent,
    DroneStateBarComponent
  ],
  exports: [
    MissionWidgetComponent,
    DroneStateComponent,
    PowerWidgetComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class WidgetsModule { }
