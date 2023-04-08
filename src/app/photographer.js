import PhotographerServices from '../services/photographer.js';
import PhotographerFactory from '../factories/photographer.js';
import MediaServices from '../services/media.js';
import MediaFactory from '../factories/media.js';
import Subject from '../subjects/subject.js';
import ModalSubject from '../subjects/modal.js';
import LightboxObserver from '../observers/lightbox.js';
import ContactFormObserver from '../observers/contactform.js';
import LikeObserver from '../observers/like.js';
import SortbyObserver from '../observers/sortby.js';

export default class App {
  async init() {
    const URLSearchParams = new URL(window.location.href).searchParams;
    const id = URLSearchParams.get("id");

    const photographerServices = new PhotographerServices();
    const photographer = await photographerServices.getPhotographerById(id);

    const photographerViews = new PhotographerFactory(photographer);
    document.title = photographerViews.PhotographerTitleDOM();

    const photographerBannerElement = document.querySelector('.photographer-banner');
    photographerBannerElement.innerHTML = photographerViews.PhotographerBannerDOM();

    const photographerInsertElement = document.querySelector('.insert');
    photographerInsertElement.innerHTML = photographerViews.PhotographerInsertDOM();

    const mediaServices = new MediaServices();
    const gallery = await mediaServices.getMediaByPhotographerId(id);

    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = gallery.map(media => {
      const mediaViews = new MediaFactory(media);
      return mediaViews.MediaCardDOM();
    }).join('');

    const galleryItemsElements = [ ...document.querySelectorAll('[data-id]') ];

    const subject = new Subject();
    const modalSubject = new ModalSubject();

    const sortbyObserver = new SortbyObserver(galleryItemsElements);
    const lightboxObserver = new LightboxObserver(modalSubject, galleryItemsElements);
    const contactFormObserver = new ContactFormObserver(modalSubject);
    const likeObserver = new LikeObserver();

    subject.attach(sortbyObserver);
    subject.attach(lightboxObserver);
    subject.attach(contactFormObserver);
    subject.attach(likeObserver);

    subject.dispatch();
  }
}

const app = new App();
app.init();
