import CheckIsInvalid from "./checkIsInvalid.js";

export default class ContactFormUtils {
  constructor() {
    this._modal = document.querySelector("#contact_modal");
    // this._formData = [ ...document.querySelectorAll(".formData") ];
  }

  openModal() {
    document.body.style.overflow = "hidden";
    this._modal.style.display = "flex";
  }

  closeModal() {
    document.body.style.overflow = "auto";
    this._modal.style.display = "none";
  }

  isInvalid() {
    const formData = [ ...document.querySelectorAll(".formData") ];
    const check = new CheckIsInvalid(formData);

    return (check.firstname("#firstname") || check.lastname("#lastname") || check.email("#email") || check.message("#message")) ? true : false;
  }

  contactFormHandler(e) {
    const form = document.querySelector("#form");
    const formData = new FormData(form);
    const result = Object.fromEntries(formData.entries());

    e.preventDefault();

    if (this.isInvalid()) return;

    console.log(result);

    this.closeModal();
  }

  launch() {
    const openButton = document.querySelector(".open");
    const closeButton = document.querySelector(".close");
    const submitButton = document.querySelector(".submit-button");

    openButton.addEventListener("click", () => this.openModal());
    closeButton.addEventListener("click", () => this.closeModal());
    submitButton.addEventListener("click", this.contactFormHandler.bind(this));
  }
}

// localhost:8080/photographer.html?id=243