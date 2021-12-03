import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './simulator.component';
import { WidgetsModule } from '../widgets/widgets.module';



@NgModule({
  declarations: [
    SimulatorComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SimulatorModule { }
