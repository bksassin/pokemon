// src/app/main/main.component.ts
import { Component } from '@angular/core';
import { ModalService } from '../services/modal.services';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { AboutComponent } from '../about/about.component';
import { PrizesComponent } from '../prizes/prizes.component'; // Add this import

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isAuthModalOpen: boolean = false;
  isLoginMode: boolean = true;

  constructor(private modalService: ModalService) {}

  openLeaderboardModal() {
    this.modalService.openModal(LeaderboardComponent);
  }

  openAboutModal() {
    this.modalService.openModal(AboutComponent);
  }

  openPrizesModal() { // Add this method
    this.modalService.openModal(PrizesComponent);
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
