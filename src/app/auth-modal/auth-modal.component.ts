// src/app/auth-modal/auth-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  template: `
    <div *ngIf="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 w-full max-w-md shadow-2xl transform transition-all duration-300 ease-in-out">
        <button (click)="close()" class="absolute top-4 right-4 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="mt-2 mb-4">
          <h2 class="text-3xl font-bold mb-6 text-center text-white">{{ isLogin ? 'Login' : 'Sign Up' }}</h2>
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="username" class="block text-sm font-medium text-yellow-300">Username</label>
              <input type="text" id="username" name="username" [(ngModel)]="username" required
                     class="mt-1 block w-full rounded-md bg-blue-400 bg-opacity-50 border-transparent placeholder-blue-200 text-white focus:border-yellow-300 focus:bg-blue-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 h-12 px-4">
            </div>
            <div *ngIf="!isLogin">
              <label for="email" class="block text-sm font-medium text-yellow-300">Email</label>
              <input type="email" id="email" name="email" [(ngModel)]="email" required
                     class="mt-1 block w-full rounded-md bg-blue-400 bg-opacity-50 border-transparent placeholder-blue-200 text-white focus:border-yellow-300 focus:bg-blue-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 h-12 px-4">
              <p class="mt-1 text-sm text-blue-200">We'll use this to notify winners about their prizes!</p>
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-yellow-300">Password</label>
              <input type="password" id="password" name="password" [(ngModel)]="password" required
                     class="mt-1 block w-full rounded-md bg-blue-400 bg-opacity-50 border-transparent placeholder-blue-200 text-white focus:border-yellow-300 focus:bg-blue-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 h-12 px-4">
            </div>
            <button type="submit"
                    class="w-full bg-yellow-400 text-blue-800 font-bold py-4 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 hover:bg-yellow-300">
              {{ isLogin ? 'Start Your Adventure!' : 'Join the Pokémon World!' }}
            </button>
          </form>
          <div class="mt-6 text-center">
            <button (click)="toggleAuthMode()" class="text-sm text-yellow-300 hover:text-yellow-100 transition duration-300 bg-transparent border-none cursor-pointer focus:outline-none">
              {{ isLogin ? 'New Trainer? Sign up now!' : 'Already a Trainer? Login here!' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AuthModalComponent {
  @Input() isOpen: boolean = false;
  @Input() isLogin: boolean = true;
  @Output() closeModal = new EventEmitter<void>();
  @Output() toggleMode = new EventEmitter<boolean>();

  username: string = '';
  password: string = '';
  email: string = '';

  onSubmit() {
    if (this.isLogin) {
      console.log('Login:', this.username, this.password);
    } else {
      console.log('Sign up:', this.username, this.email, this.password);
    }
    this.close();
  }

  toggleAuthMode() {
    this.toggleMode.emit(!this.isLogin);
    this.username = '';
    this.password = '';
    this.email = '';
  }

  close() {
    this.closeModal.emit();
  }
}
