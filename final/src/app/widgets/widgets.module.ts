import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionWidgetComponent } from './mission-widget/mission-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { DroneStateComponent } from './drone-state/drone-state.component';
import { PowerWidgetComponent } from './power-widget/power-widget.component';
import { DroneStateBarComponent } from './drone-state-bar/drone-state-bar.component';
import { QuestWidgetComponent } from './quest-widget/quest-widget.component';
import {MatButtonModule} from "@angular/material/button";
import {KeyboardComponent} from "./keyboard/keyboard.component";



@NgModule({
  declarations: [
    MissionWidgetComponent,
    DroneStateComponent,
    PowerWidgetComponent,
    DroneStateBarComponent,
    QuestWidgetComponent,
    KeyboardComponent
  ],
  exports: [
    MissionWidgetComponent,
    DroneStateComponent,
    PowerWidgetComponent,
    QuestWidgetComponent,
    KeyboardComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class WidgetsModule { }
