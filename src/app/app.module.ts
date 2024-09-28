// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { PrizesComponent } from './prizes/prizes.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainComponent,
    AboutComponent,
    LeaderboardComponent,
    GameComponent,
    HowToPlayComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    AuthModalComponent,
    PrizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
