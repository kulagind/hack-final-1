import {SimulatorModule} from "./simulator/simulator.module";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainModule} from './main/main.module';
import {WidgetsModule} from './widgets/widgets.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {LoginModule} from "./login/login.module";
import {AuthGuard} from "./auth.guard";
import {AdminComponent} from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    WidgetsModule,
    BrowserAnimationsModule,
    SimulatorModule,
    MatFormFieldModule,
    LoginModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
