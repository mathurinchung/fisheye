import PhotographerFactory from "../factories/photographer.js";
import PhotographerService from "../services/photographer.js";

class App {
  displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach(photographer => {
      const Template = new PhotographerFactory(photographer);
      photographersSection.innerHTML += Template.UserCardDOM();
    });
  }

  async init() {
    // Récupère les datas des photographes
    const photographers = await PhotographerService.getPhotographers();

    this.displayData(photographers);
  }
}

const app = new App();
app.init();