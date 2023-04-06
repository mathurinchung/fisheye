export default class ContactFormViews {
  constructor(data) {
    this.data = data;
  }

  ContactFormDOM() {
    return `
      <form  id="contactform">
        <header>
          <h2>Contactez-moi</h2>
          <i class="icon-close"></i>
        </header>

        <div class="formData">
          <label for="firstName">Prénom</label>
          <input id="firstName" name="firstname" type="text" />
        </div>

        <div class="formData">
          <label for="lastName">Nom</label>
          <input id="lastName" name="lastname" type="text" />
        </div>

        <div class="formData">
          <label for="email">Email</label>
          <input id="email" name="email" type="text" />
        </div>

        <div class="formData">
          <label for="message">Votre message</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    `;
  }
}