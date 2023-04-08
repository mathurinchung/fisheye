import Subject from './subject.js';

export default class ModalSubject extends Subject {
  constructor() {
    super();
    this.modal = document.querySelector('.modal');
  }

  openModal() {
      document.body.style.overflow = 'hidden';
      this.modal.classList.add('active');

      this.dispatch();
  }

  closeModal() {
    document.body.style.overflow = 'auto';
    this.modal.classList.remove('active');

    this.dispatch();
  }

  dispatch() {
    this.observers.forEach(observer => observer.update(this.modal));
  }
}
