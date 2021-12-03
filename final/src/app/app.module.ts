import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { WidgetsModule } from './widgets/widgets.module';
import { SimulatorModule } from "./simulator/simulator.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MainModule,
        AppRoutingModule,
        WidgetsModule,
        BrowserAnimationsModule,
        SimulatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
