import ContactFormViews from '../views/contactform.js';
import ContactFormContainer from '../containers/contactform.js';

export default class ContactFormObserver {
  constructor(modalSubject) {
    this.modalSubject = modalSubject;
    this.contactform = new ContactFormViews();
    this.contactFormContainer = new ContactFormContainer();
  }
  
  update(modal) {
    modal.innerHTML = this.contactform.ContactFormDOM();

    document.querySelector('#contactform').addEventListener('submit', e => {
      if (this.contactFormContainer.handleSubmit(e)) {
        this.modalSubject.closeModal();
        this.modalSubject.detach(this);
      }
    });

    const closeButtonElement = document.querySelector('.icon-close');
    closeButtonElement.addEventListener('click', () => {
      this.modalSubject.closeModal();
      this.modalSubject.detach(this);
    });
  }

  init() {
    const contactFormButtonElement = document.querySelector('.contact-me');
    contactFormButtonElement.addEventListener('click', () => {
      this.modalSubject.attach(this);
      this.modalSubject.openModal();

      const name = document.querySelector('.info h2').textContent;
      document.querySelector('#contactform h2').textContent = `Contactez-moi ${ name }`;
    });
  }
}
