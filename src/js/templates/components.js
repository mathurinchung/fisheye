export default class Components {
  static ContactFormDOM(name) {
    return `
      <div id="contact_modal" class="modal-bg">
        <div class="modal">
          <header>
            <h1>Contactez-moi ${name}</h1>
            <img class="close" src="assets/icons/close.svg" />
          </header>
          <div class="modal-body">
            <form id="form" name="contact" action="#" method="post" novalidate>
              <div class="formData">
                <label>Prénom</label>
                <input id="firstname" class="text-control" name="firstname" type="text" required />
              </div>
              <div class="formData">
                <label>Nom</label>
                <input id="lastname" class="text-control" name="lastname" type="text" required />
              </div>
              <div class="formData">
                <label>Email</label>
                <input id="email" class="text-control" name="email" type="text" required />
              </div>
              <div class="formData message">
                <label>Votre message</label>
                <textarea id="message" name="message" class="text-control" required></textarea>
              </div>

              <button class="submit-button">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  static SortByDropdownDOM() {
    return `
      <div class="filters">
        <h3>Trier par</h3>
        <div class="filters-dropdown">
          <div class="filters-selected">
            <span class="filters-value">Popularité</span>
          </div>
          <button id="icon" class="filters-button">
            <i class="fa fa-chevron-down"></i>
          </button>
          <ul class="filters-option">
            <li class="filters-item">Popularité</li>
            <li class="filters-item">Date</li>
            <li class="filters-item">Titre</li>
          </ul>
        </div>
      </div>
    `;
  }
}