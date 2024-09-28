// src/app/landing-page/landing-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  isAuthModalOpen: boolean = false;
  isLoginMode: boolean = true;

  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/how-to-play']);
  }

  playGame() {
    this.router.navigate(['/main/game']);
  }

  openAuthModal(isLogin: boolean) {
    this.isLoginMode = isLogin;
    this.isAuthModalOpen = true;
  }

  closeAuthModal() {
    this.isAuthModalOpen = false;
  }

  toggleAuthMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }
}
