import { Component } from '@angular/core';
import { ModalService } from '../services/modal.services';

@Component({
  selector: 'app-modal',
  template: `
    <div *ngIf="(modalService.modalState$ | async)?.isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative shadow-lg">
        <button (click)="closeModal()" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="mt-8 mb-4 max-h-[80vh] overflow-y-auto">
          <ng-container *ngComponentOutlet="(modalService.modalState$ | async)?.component"></ng-container>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalService.closeModal();
  }
}
