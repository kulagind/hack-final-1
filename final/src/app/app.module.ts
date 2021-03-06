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
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { TestComponent } from './tests/test/test.component';
import {MatRadioModule} from "@angular/material/radio";
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { MatIconModule } from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { ResultComponent } from './tests/result/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TestComponent,
    StatisticsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    WidgetsModule,
    BrowserAnimationsModule,
    SimulatorModule,
    MatFormFieldModule,
    LoginModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
