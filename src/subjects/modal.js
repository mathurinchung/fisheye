export default class ModalSubject {
  constructor() {
    this.observers = [];
    this.modalState = false;
    this.modal = document.querySelector('.modal');
  }

  openModal() {
      this.modalState = true;
      document.body.style.overflow = 'hidden';
      this.modal.classList.add('active');

      this.dispatch();
  }

  closeModal() {
    this.modalState = false;
    document.body.style.overflow = 'auto';
    this.modal.classList.remove('active');

    this.dispatch();
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.filter(obs => obs !== observer)
  }

  dispatch() {
    this.observers.forEach(observer => observer.update(this.modal));
  }
}
