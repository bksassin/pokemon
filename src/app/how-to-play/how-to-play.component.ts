import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;

  constructor(private router: Router) {
    this.audio = new Audio('/assets/professor-oak.mp3');
  }

  ngOnInit() {
    this.playProfessorOakAudio();
  }

  ngOnDestroy() {
    this.stopProfessorOakAudio();
  }

  playGame() {
    this.stopProfessorOakAudio();
    this.router.navigate(['/main/game']);
  }

  private playProfessorOakAudio() {
    this.audio.play().catch(error => console.error("Audio playback failed:", error));
  }

  private stopProfessorOakAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
