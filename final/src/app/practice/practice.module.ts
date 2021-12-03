import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticePageComponent } from './components/practice-page/practice-page.component';
import { PracticeRoutingModule } from "./practice-routing.module";

@NgModule({
  declarations: [
    PracticePageComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
