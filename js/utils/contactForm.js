export default class ContactFormUtils {
  constructor() {
    this.modal = document.getElementById("contact_modal");
  }

  displayModal() {
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}