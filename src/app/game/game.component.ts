import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonCardService } from './pokemon-card.service';

interface PokemonCard {
  id: string;
  name: string;
  images: { small: string; large: string };
  types: string[];
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  currentCard: PokemonCard | null = null;
  options: string[] = [];
  score: number = 0;
  highScore: number = 0;
  isLoading: boolean = true;
  isBlurred: boolean = true;
  incorrectAnswer: string | null = null;
  wrongAnswerCount: number = 0;
  isRestarting: boolean = false;

  private backgroundAudio: HTMLAudioElement;
  private correctSound: HTMLAudioElement;
  private incorrectSound: HTMLAudioElement;
  private restartSound: HTMLAudioElement;

  private readonly BACKGROUND_VOLUME: number = 0.3; // 30% volume for background music
  private readonly EFFECTS_VOLUME: number = 0.7; // 70% volume for sound effects

  private songPaths: string[] = [
    '/assets/opening.mp3',
    '/assets/second-song.mp3',
    '/assets/third-song.mp3',
    '/assets/fourth-song.mp3',
    '/assets/fifth-song.mp3',
    '/assets/sixth-song.mp3',
    '/assets/secenth-song.mp3'
  ];
  private currentSongIndex: number = 0;

  constructor(private pokemonCardService: PokemonCardService) {
    this.backgroundAudio = new Audio();
    this.backgroundAudio.addEventListener('ended', () => this.playNextSong());

    this.correctSound = new Audio('/assets/button.mp3');
    this.incorrectSound = new Audio('/assets/bump.mp3');
    this.restartSound = new Audio('/assets/recover.mp3');

    this.setAudioVolumes();
  }

  ngOnInit() {
    this.loadNewCard();
    this.playBackgroundMusic();
  }

  ngOnDestroy() {
    this.stopBackgroundMusic();
  }

  private setAudioVolumes() {
    this.backgroundAudio.volume = this.BACKGROUND_VOLUME;
    this.correctSound.volume = this.EFFECTS_VOLUME;
    this.incorrectSound.volume = this.EFFECTS_VOLUME;
    this.restartSound.volume = this.EFFECTS_VOLUME;
  }

  private playBackgroundMusic() {
    this.backgroundAudio.src = this.songPaths[this.currentSongIndex];
    this.backgroundAudio.play().catch(error => console.error("Audio playback failed:", error));
  }

  private playNextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songPaths.length;
    this.backgroundAudio.src = this.songPaths[this.currentSongIndex];
    this.backgroundAudio.play().catch(error => console.error("Audio playback failed:", error));
  }

  private stopBackgroundMusic() {
    this.backgroundAudio.pause();
    this.backgroundAudio.currentTime = 0;
    this.backgroundAudio.removeEventListener('ended', () => this.playNextSong());
  }

  private playSound(sound: HTMLAudioElement) {
    sound.currentTime = 0; // Reset the sound to the beginning
    sound.play().catch(error => console.error("Sound effect playback failed:", error));
  }

  loadNewCard() {
    this.isLoading = true;
    this.isBlurred = true;
    this.wrongAnswerCount = 0;
    this.isRestarting = false;
    this.pokemonCardService.getRandomCard().subscribe(
      (card: PokemonCard) => {
        this.currentCard = card;
        this.generateOptions();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon card:', error);
        this.isLoading = false;
        this.currentCard = null;
      }
    );
  }

  generateOptions() {
    if (this.currentCard) {
      this.pokemonCardService.getRandomPokemonNames(3).subscribe(
        (randomNames: string[]) => {
          this.options = [this.currentCard!.name, ...randomNames];
          this.shuffleArray(this.options);
        },
        (error) => {
          console.error('Error generating options:', error);
          this.options = [this.getCurrentCardType.name, 'Pikachu', 'Charizard', 'Bulbasaur'];
          this.shuffleArray(this.options);
        }
      );
    } else {
      this.options = ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle'];
    }
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  checkAnswer(selectedOption: string) {
    if (this.currentCard && selectedOption === this.currentCard.name) {
      this.playSound(this.correctSound);
      this.isBlurred = false;
      this.score++;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      setTimeout(() => this.loadNewCard(), 2000);
    } else {
      this.playSound(this.incorrectSound);
      this.wrongAnswerCount++;
      this.flashIncorrectAnswer(selectedOption);

      if (this.wrongAnswerCount >= 2) {
        this.isRestarting = true;
        this.playSound(this.restartSound);
        setTimeout(() => this.restartGame(), 3000); // Increased delay to show restart message
      }
    }
  }

  flashIncorrectAnswer(selectedOption: string) {
    this.incorrectAnswer = selectedOption;
    setTimeout(() => {
      this.incorrectAnswer = null;
    }, 300);
  }

  restartGame() {
    this.score = 0;
    this.loadNewCard();
  }

  skipCard() {
    this.loadNewCard();
  }

  getCurrentCardType(): string {
    return this.currentCard && this.currentCard.types.length > 0
           ? this.currentCard.types[0]
           : 'Unknown';
  }
}
