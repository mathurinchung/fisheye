import PhotographerFactory from "../factories/photographer.js";
import PhotographerService from "../services/photographer.js";

class App {
  displayData(photographers) {
    const photographersSection = document.querySelector(".photographer-section");

    photographers.map(photographer => {
      const photographerTemplate = new PhotographerFactory(photographer);
      photographersSection.innerHTML += photographerTemplate.UserCardDOM();
    });
  }

  async init() {
    const photographers = await PhotographerService.getPhotographers();

    this.displayData(photographers);
  }
}

const app = new App();
app.init();