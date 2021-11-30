import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PracticePageComponent } from "./components/practice-page/practice-page.component";

const routes: Route[] = [{ path: '', component: PracticePageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PracticeRoutingModule {}
