import ModalUtils from "./modal.js";

export default class LightBoxUtils extends ModalUtils {
  constructor(modal) {
    super(modal)
    this._gallery = [ ...document.querySelectorAll("[data-id]") ];
    this._currentItem = "";
  }
  
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

  displayMedia() {
    const mediaLightbox = document.querySelector(".lightbox-media")
    const captionLightbox = document.querySelector(".lightbox-caption");

    mediaLightbox.innerHTML = this._currentItem.querySelector(".media").outerHTML;
    captionLightbox.textContent = this._currentItem.querySelector(".caption .title").textContent;

    if (mediaLightbox.querySelector(".media").tagName === "VIDEO") mediaLightbox.querySelector(".media").setAttribute("controls", "");
  }

  lightboxHandler(e) {
    this._currentItem = e.target.closest("[data-id]");
    this._currentIndex = this._gallery.indexOf(this._currentItem);

    this.displayMedia();

    this.openModal();
  }
  
  launch() {
    const openButton = document.querySelectorAll(".lnk-media.open");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    
    prevButton.addEventListener("click", () => this.prev());
    nextButton.addEventListener("click", () => this.next());
    openButton.forEach(btn => btn.addEventListener("click", this.lightboxHandler.bind(this)));
  }
}