import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DroneComponent } from './components/drone/drone.component';


@NgModule({
  declarations: [
    MainComponent,
    DroneComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MainModule {
}
