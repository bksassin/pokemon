import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<{ isOpen: boolean, component: any }>({ isOpen: false, component: null });
  modalState$ = this.modalStateSubject.asObservable();

  openModal(component: any) {
    this.modalStateSubject.next({ isOpen: true, component });
  }

  closeModal() {
    this.modalStateSubject.next({ isOpen: false, component: null });
  }
}
