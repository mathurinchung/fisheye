import ModalUtils from "./modal.js";
import CheckIsInvalid from "./checkIsInvalid.js";

/**
 * 
 */
export default class ContactFormUtils extends ModalUtils {
  constructor(modal) {
    super(modal);
    this.form = document.querySelector("#contact-form");
  }

  /**
   * 
   * @returns 
   */
  #isInvalid() {
    const formData = [ ...document.querySelectorAll(".formData") ];
    const check = new CheckIsInvalid(formData);

    check.firstname("#firstname");
    check.lastname("#lastname");
    check.email("#email");
    check.message("#message");
    return (check.firstname("#firstname") || check.lastname("#lastname") || check.email("#email") || check.message("#message")) ? true : false;
  }

  /**
   * 
   * @param {*} e
   * @returns 
   */
  contactFormHandler(e) {
    const formData = new FormData(this.form);
    const result = Object.fromEntries(formData.entries());

    e.preventDefault();

    if (this.#isInvalid()) return;

    console.log("contact: ", result);

    this.closeModal();
    this.form.reset();
  }

  /**
   * 
   */
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

  /**
   * 
   */
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