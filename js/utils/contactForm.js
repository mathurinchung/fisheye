import ModalUtils from "./modal.js";
import CheckIsInvalid from "./checkIsInvalid.js";

export default class ContactFormUtils extends ModalUtils {
  constructor(modal) {
    super(modal);
    this.form = document.querySelector("#contact-form");
  }

  #isInvalid() {
    const formData = [ ...document.querySelectorAll(".formData") ];
    const check = new CheckIsInvalid(formData);

    check.firstname("#firstnameInput");
    check.lastname("#lastnameInput");
    check.email("#emailInput");
    check.message("#messageInput");
    return (check.firstname("#firstnameInput") || check.lastname("#lastnameInput") || check.email("#emailInput") || check.message("#messageInput")) ? true : false;
  }

  contactFormHandler(e) {
    const formData = new FormData(this.form);
    const result = Object.fromEntries(formData.entries());

    e.preventDefault();

    if (this.#isInvalid()) return;

    console.log("contact: ", result);

    this.closeModal();
    this.form.reset();
  }

  controlsHandler() {
    document.addEventListener("keydown", e => {
      const keyCode = e.key;
      switch (keyCode) {
      case "Escape": this.closeModal();
        break;

      case "Enter": this.contactFormHandler.bind(this);
        break;
      }
    });
  }

  init() {
    const openButton = document.querySelector(".btn-contact.open");

    this.form.addEventListener("submit", this.contactFormHandler.bind(this));

    openButton.addEventListener("click", () => {
      this.openModal();
      document.querySelector("#firstname").focus();
    });

    this.controlsHandler();
  }
}