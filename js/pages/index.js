class App {
  async displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach(photographer => {
      const Model = new PhotographerModel(photographer);
      const userCardDOM = Model.UserCardDOM;
      photographersSection.innerHTML += userCardDOM;
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
