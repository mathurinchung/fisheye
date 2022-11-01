/**
 * 
 */
export default class Components {
  /**
   * 
   * @param {*} name 
   * @returns 
   */
  static ContactFormDOM(name) {
    return `
      <div id="contact" class="modal-bg">
        <div class="modal" aria-label="Contact me ${name}" role="dialog">
          <header>
            <h1>Contactez-moi ${name}</h1>
            <button class="contact-close close" aria-label="Close contact form">
              <span class="icon-close" aria-hidden="true"></span>
            </button>
          </header>

          <div class="modal-body">
            <form id="contact-form" name="contact" action="#" method="get" novalidate>
              <div class="formData">
                <label id="firstname" for="firstnameInput">Prénom</label>
                <input id="firstnameInput" class="text-control" aria-labelledby="firstname" aria-required="true" name="firstname" type="text" required />
              </div>
              <div class="formData">
                <label id="lastname" for="lastnameInput">Nom</label>
                <input id="lastnameInput" class="text-control" aria-labelledby="firstname" aria-required="true" name="lastname" type="text" required />
              </div>
              <div class="formData">
                <label id="email" for="emailInput">Email</label>
                <input id="emailInput" class="text-control" aria-labelledby="email" aria-required="true" name="email" type="email" required />
              </div>
              <div class="formData message">
                <label id="message" for="messageInput">Votre message</label>
                <textarea id="messageInput" class="text-control" aria-labelledby="message" aria-required="true" name="message" required></textarea>
              </div>

              <button class="submit-button" aria-label="Send">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 
   * @returns 
   */
  static SortByDropdownDOM() {
    return `
      <div class="filters">
        <label id="sortBy">Trier par</label>
        <div class="filters-dropdown">
          <button class="filters-selected" type="button" aria-labelledby="sortBy" aria-expanded="false" aria-haspopup="listbox">
            <span class="filters-value">Popularité</span>
            <span class="filters-button"><i class="fa fa-chevron-down"></i></span>
          </button>
          <ul class="filters-option" aria-labelledby="sortBy" aria-activedescendant="popularity" aria-selected="true" role="listbox">
            <li class="filters-item" data-value="popularity" role="button" tabindex="0">Popularité</li>
            <li class="filters-item" data-value="date" role="button" tabindex="0">Date</li>
            <li class="filters-item"  data-value="title" role="button" tabindex="0">Titre</li>
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * 
   * @returns 
   */
  static LightBoxDOM() {
    return `
      <div id="lightbox" class="modal-bg">
        <div class="modal" aria-label="image closeup view">
          <button class="lightbox-close close" type="button">
            <span class="icon-close" aria-hidden="true"></span>
          </button>
          <button class="previous" type="button"><i class="fa fa-chevron-left"></i></button>
          <div class="lightbox-container">
            <div class="lightbox-media"></div>
            <p class="lightbox-caption"></p>
          </div>
          <button class="next" type="button"><i class="fa fa-chevron-right"></i></button>
        </div>
      </div>
    `;
  }
}