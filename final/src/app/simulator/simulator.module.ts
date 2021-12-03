import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './simulator.component';
import { ConnectionLostOverlayComponent } from './connection-lost-overlay/connection-lost-overlay.component';

@NgModule({
  declarations: [
    SimulatorComponent,
    ConnectionLostOverlayComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SimulatorComponent,
    ConnectionLostOverlayComponent,
  ]
})
export class SimulatorModule { }
