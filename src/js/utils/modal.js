export default class ModalUtils {
  constructor(modal) {
    this._modal = document.querySelector(modal);
    this._header = document.querySelector("#header");
    this._main = document.querySelector("#main");

    const closeButton = document.querySelectorAll(".close");
    closeButton.forEach(btn => btn.addEventListener("click", () => this.closeModal()));
  }

  openModal() {
    document.body.style.overflow = "hidden";
    this._modal.style.display = "block";
    this._modal.setAttribute("aria-hidden", false);
    this._header.setAttribute("aria-hidden", true);
    this._main.setAttribute("aria-hidden", true);
  }

  closeModal() {
    document.body.style.overflow = "auto";
    this._modal.style.display = "none";
    this._modal.setAttribute("aria-hidden", true);
    this._header.setAttribute("aria-hidden", false);
    this._main.setAttribute("aria-hidden", false);
  }
}