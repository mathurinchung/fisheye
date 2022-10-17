export default class Components {
  static ContactFormDOM() {
    return `
      <div id="contact_modal">
        <div class="modal">
          <header>
            <h2>Contactez-moi</h2>
            <img class="close" src="assets/icons/close.svg" />
          </header>
          <form>
            <div>
              <label>Prénom</label>
              <input />
            </div>
            <button class="contact_button">Envoyer</button>
          </form>
        </div>
      </div>
    `;
  }

  static SortByDropdownDOM() {
    return `
      <div class="filters">
        <label for="select">Trier par</label>
        <!-- <select id="select"> -->
          <!-- <option value="0">Popularité</option> -->
          <!-- <option value="1">Date</option> -->
          <!-- <option value="2">Titre</option> -->
        <!-- </select> -->
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