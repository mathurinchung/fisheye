import ModalUtils from "./modal.js";
import CheckIsInvalid from "./checkIsInvalid.js";

export default class ContactFormUtils extends ModalUtils {
  isInvalid() {
    const formData = [ ...document.querySelectorAll(".formData") ];
    const check = new CheckIsInvalid(formData);

    return (check.firstname("#firstname") || check.lastname("#lastname") || check.email("#email") || check.message("#message")) ? true : false;
  }

  contactFormHandler(e) {
    const form = document.querySelector("#contact-form");
    const formData = new FormData(form);
    const result = Object.fromEntries(formData.entries());

    e.preventDefault();

    if (this.isInvalid()) return;

    console.log(result);

    this.closeModal();
  }

  launch() {
    const openButton = document.querySelector(".btn-contact.open");
    const submitButton = document.querySelector(".submit-button");

    openButton.addEventListener("click", () => this.openModal());
    submitButton.addEventListener("click", this.contactFormHandler.bind(this));
  }
}