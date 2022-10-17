export default class ContactFormUtils {
  constructor() {
    this._modal = document.querySelector("#contact_modal");
  }

  openModal() {
    this._modal.style.display = "block";
  }

  closeModal() {
    this._modal.style.display = "none";
  }

  launcher() {
    const openButton = document.querySelector(".open");
    const closeButton = document.querySelector(".close");

    openButton.addEventListener("click", () => this.openModal());
    closeButton.addEventListener("click", () => this.closeModal());
  }
}