export default class PhotographerTemplate {
  constructor(data) {
    this._data = data;
  }

  UserCardDOM() {
    return `
      <article>
        <a href="/photographer.html?id=${this._data.id}">
          <img class="portrait" src=${this._data.portrait} alt=${this._data.name} />
          <h2 class="name">${this._data.name}</h2>
        </a>
        <p class="location">${this._data.location}</p>
        <p class="tagline">${this._data.tagline}</p>
        <p class="price">${this._data.price}€/jour</p>
      </article>
    `;
  }

  UserTitleDOM() {
    return `Fisheye - ${this._data.name}`;
  }

  UserHeaderDOM() {
    return `
      <div>
        <h1 class="name">${this._data.name}</h1>
        <p class="location">${this._data.location}</p>
        <p class="tagline">${this._data.tagline}</p>
      </div>
      <button class="button contact_button">Contactez-moi</button>
      <img class="portrait" src=${this._data.portrait} alt=${this.name} />
    `;
  }

  UserInsertDOM(likes) {
    return `
      <div class="insert">
        <span class="insert-likes">${likes} <i class="fa fa-heart"></i></span>
        <span class="insert-price">${this._data.price}€ / jour</span>
      </div>
    `;
  }

  UserContactFormDOM() {
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
}