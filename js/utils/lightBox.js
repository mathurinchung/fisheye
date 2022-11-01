import ModalUtils from "./modal.js";

/**
 * 
 */
export default class LightBoxUtils extends ModalUtils {
  /**
   * 
   * @param {*} modal 
   */
  constructor(modal, gallery) {
    super(modal)
    this._gallery = gallery;
    this._currentIndex = -1;
    this._currentItem = "";
  }

  /**
   * 
   */
  prev() {
    if (this._currentIndex < 1) {
      this._currentIndex = this._gallery.length - 1;
      this._currentItem = this._gallery.at(-1);
    } else {
      this._currentIndex--;
      this._currentItem = this._gallery[this._currentIndex];
    }

    this.displayMedia();
  }

  /**
   * 
   */
  next() {
    if (this._currentIndex >= this._gallery.length - 1) {
      this._currentIndex = 0;
      this._currentItem = this._gallery.at(0);
    } else {
      this._currentIndex++;
      this._currentItem = this._gallery[this._currentIndex];
    }

    this.displayMedia();
  }

  /**
   * 
   */
  displayMedia() {
    const mediaLightbox = document.querySelector(".lightbox-media");
    const captionLightbox = document.querySelector(".lightbox-caption");

    mediaLightbox.innerHTML = this._currentItem.querySelector(".media").outerHTML;
    captionLightbox.textContent = this._currentItem.querySelector(".caption .title").textContent;

    if (mediaLightbox.querySelector(".media").tagName === "VIDEO") {
      mediaLightbox.querySelector(".media").setAttribute("controls", "");

      this.controlVideo(mediaLightbox.querySelector(".media"));
    }
  }

  /**
   * 
   * @param {*} e 
   */
  lightboxHandler(e) {
    this._currentItem = e.target.closest("[data-id]");
    this._currentIndex = this._gallery.indexOf(this._currentItem);

    this.displayMedia();

    this.openModal();
  }

  /**
   * 
   */
  controlsHandler() {
    document.addEventListener("keydown", e => {
      const keyCode = e.key;
      switch (keyCode) {
        case "ArrowRight": this.next();
        break;

        case "ArrowLeft": this.prev();
        break;

        case "Escape": this.closeModal();
        break;
      }
    });
  }

  controlVideo(video) {
    document.addEventListener("keydown", e => {
      if (e.key === " ") video.paused ? video.play() : video.pause();
    });
  }

  /**
   * 
   */
  init() {
    const openButton = document.querySelectorAll(".lnk-media.open");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    
    prevButton.addEventListener("click", () => this.prev());
    nextButton.addEventListener("click", () => this.next());
    openButton.forEach(btn => btn.addEventListener("click", this.lightboxHandler.bind(this)));

    this.controlsHandler();
  }
}