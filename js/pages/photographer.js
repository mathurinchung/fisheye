import PhotographerFactory from "../factories/photographer.js";
import PhotographerService from "../services/photographer.js";
import MediaFactory from "../factories/media.js";
import MediaService from "../services/media.js";
// import ContactFormUtils from "../utils/contactForm.js";

class App {
  displayData(photographer, mediaList) {
    const photographerMain = document.querySelector("#main");
    const photographerHeader = document.querySelector(".photographer_header");
    const photographerMedia = document.querySelector(".photographer_media");
    // const openModal = document.querySelector(".contact_button");
    // const closeModal = document.querySelector(".close");
    let likes = 0;

    const photographerTemplate = new PhotographerFactory(photographer);


    document.title = photographerTemplate.UserTitleDOM();
    photographerHeader.innerHTML = photographerTemplate.UserHeaderDOM();
    photographerMain.insertAdjacentHTML("afterend", photographerTemplate.UserContactFormDOM());

    mediaList.forEach(media => {
      const mediaTemplate = new MediaFactory(media);
      likes += media.likes;
      photographerHeader.insertAdjacentHTML("beforeend", photographerTemplate.UserInsertDOM(likes));
      photographerMedia.innerHTML += mediaTemplate.MediaCardDOM();
    });

    // const contactForm = new ContactFormUtils();
    // openModal.addEventListener("click", ContactFormUtils.displayModal);
    // closeModal.addEventListener("click", ContactFormUtils.closeModal);
  }

  async init() {
    // Récupère les datas du photographe
    const URLSearchParams = new URL(window.location.href).searchParams;
    const id = URLSearchParams.get("id");

    const photographer = await PhotographerService.getPhotographerById(id);
    const media = await MediaService.getMediaByPhotographerId(id);
    this.displayData(photographer, media);
  }
}

const app = new App();
app.init();
