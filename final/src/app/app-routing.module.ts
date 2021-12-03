import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/components/main/main.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { LoginComponent } from './login/login/login.component';
import {AuthGuard} from "./auth.guard";
import {AdminComponent} from "./admin/admin/admin.component";
import { GameOverScreenComponent } from "./main/components/game-over-screen/game-over-screen.component";
import {TestComponent} from "./tests/test/test.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'simulator', component: SimulatorComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'simulation-complete', component: GameOverScreenComponent },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then(({ PracticeModule }) => PracticeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
