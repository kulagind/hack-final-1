import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DroneComponent } from './components/drone/drone.component';
import { RouterModule } from '@angular/router';
import { GameOverScreenComponent } from './components/game-over-screen/game-over-screen.component';


@NgModule({
  declarations: [
    MainComponent,
    DroneComponent,
    GameOverScreenComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule
  ]
})
export class MainModule {
}
