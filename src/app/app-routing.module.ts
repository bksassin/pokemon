import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'game', component: GameComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'game', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
