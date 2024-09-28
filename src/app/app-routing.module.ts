import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: GameComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
