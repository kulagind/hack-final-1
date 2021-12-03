import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/components/main/main.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { LoginComponent } from './login/login/login.component';
import { GameOverScreenComponent } from "./main/components/game-over-screen/game-over-screen.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: 'simulation-complete', component: GameOverScreenComponent },
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
