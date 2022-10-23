export default class ModalUtils {
  constructor(modal) {
    this._modal = document.querySelector(modal);

    const closeButton = document.querySelectorAll(".close");
    closeButton.forEach(btn => btn.addEventListener("click", () => this.closeModal()));
  }

  openModal() {
    document.body.style.overflow = "hidden";
    this._modal.style.display = "flex";
  }

  closeModal() {
    document.body.style.overflow = "auto";
    this._modal.style.display = "none";
  }
}