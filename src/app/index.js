import PhotographerServices from '../services/photographer.js';
import PhotographerFactory from '../factories/photographer.js';

export default class App {
  async init() {
    const photographerServices = new PhotographerServices();
    const photographers = await photographerServices.getPhotographers();
    
    const photographersListElement = document.querySelector('.photographers-list');
    photographersListElement.innerHTML = photographers.map(photographer => {
      const photographerViews = new PhotographerFactory(photographer);
      return photographerViews.PhotographerCardDOM();
    }).join('');
  }
}

const app = new App();
app.init();
