export default class ContactFormUtils {
  constructor() {
    this._modal = document.querySelector("#contact_modal");
  }

  openModal() {
    document.body.style.overflow = "hidden";
    this._modal.style.display = "block";
  }

  closeModal() {
    document.body.style.overflow = "auto";
    this._modal.style.display = "none";
  }

  contactFormHandler() {}

  launcher() {
    const openButton = document.querySelector(".open");
    const closeButton = document.querySelector(".close");

    openButton.addEventListener("click", () => this.openModal());
    closeButton.addEventListener("click", () => this.closeModal());
  }
}