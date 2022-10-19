export default class Components {
  static ContactFormDOM(name) {
    return `
      <div id="contact_modal">
        <div class="modal">
          <header>
            <h1>Contactez-moi ${name}</h1>
            <img class="close" src="assets/icons/close.svg" />
          </header>
          <form>
            <div class="formdata">
              <label>Prénom</label>
              <input />
            </div>
            <div class="formdata">
              <label>Nom</label>
              <input />
            </div>
            <div class="formdata">
              <label>Email</label>
              <input />
            </div>
            <div class="formdata message">
              <label>Votre message</label>
              <input />
            </div>
            <button class="submit-button">Envoyer</button>
          </form>
        </div>
      </div>
    `;
  }

  static SortByDropdownDOM() {
    return `
      <div class="filters">
        <label for="select">Trier par</label>
        <div class="filters-dropdown">
          <button class="filters-selected">
            <span class="option-value">Popularité</span>
            <i class="fa fa-chevron-down"></i>
          </button>
          <div class="filters-list">
            <ul class="filters-items">
              <li class="filters-item">Popularité</li>
              <li class="filters-item">Date</li>
              <li class="filters-item">Titre</li>
            </ul>
            <button class="filters-list-close">
              <i class="fa fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}