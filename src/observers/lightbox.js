import LightboxViews from '../views/lightbox.js';
import LighboxContainer from '../containers/lightbox.js';

export default class LightboxObserver {
  constructor(modalSubject, galleryElements) {
    this.modalSubject = modalSubject;
    this.galleryElements = galleryElements;
    this.lightboxViews = new LightboxViews();
  }
  
  update(modal) {
    modal.innerHTML = this.lightboxViews.LightboxDOM();

    const arrowLeftElement = document.querySelector('.icon-arrow-left');
    arrowLeftElement.addEventListener('click', () => this.lighboxContainer.handlePrev());

    const arrowRightElement = document.querySelector('.icon-arrow-right');
    arrowRightElement.addEventListener('click', () => this.lighboxContainer.handleNext());

    const closeButtonElement = document.querySelector('.icon-close');
    closeButtonElement.addEventListener('click', () => {
      this.galleryElements.forEach(element => {
        if (element.querySelector('.media').tagName === 'VIDEO') {
          const video = element.querySelector('.media');
          video.removeAttribute('controls');
          video.load();
          Object.keys(video.textTracks).forEach(key => video.textTracks[key].mode = 'hidden');
        }
      });

      this.modalSubject.closeModal();
      this.modalSubject.detach(this);
    });
  }

  init() {
    this.galleryElements.forEach(element => element.querySelector('.media').addEventListener('click', () => {
      this.modalSubject.attach(this);
      this.modalSubject.openModal();

      this.lighboxContainer = new LighboxContainer(this.galleryElements, element);
      this.lighboxContainer.handleLightboxMedia();
    }));
  }
}
