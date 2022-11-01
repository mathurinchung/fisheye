/**
 * 
 */
export default class PhotographerTemplate {
  /**
   * 
   * @param {*} data 
   */
  constructor(data) {
    this._data = data;
  }

  /**
   * 
   * @returns 
   */
  UserCardDOM() {
    return `
      <article class="photographer" data-id="${this._data.id}" data-name="${this._data.name}">
        <a href="/photographer.html?id=${this._data.id}">
          <img class="portrait" src="${this._data.portrait}" alt="${this._data.name}" />
          <h2 class="name">${this._data.name}</h2>
        </a>
        <p class="location">${this._data.location}</p>
        <p class="tagline">${this._data.tagline}</p>
        <p class="price">${this._data.price}€/jour</p>
      </article>
    `;
  }

  /**
   * 
   * @returns 
   */
  UserTitleDOM() { return `Fisheye - ${this._data.name}`; }

  /**
   * 
   * @returns 
   */
  UserBannerDOM() {
    return `
      <div class="info">
        <h1 class="name">${this._data.name}</h1>
        <p class="location">${this._data.location}</p>
        <p class="tagline">${this._data.tagline}</p>
      </div>
      <button class="btn btn-contact open" type="button">Contactez-moi</button>
      <img class="portrait" src=${this._data.portrait} alt="${this.name}" />
    `;
  }

  /**
   * 
   * @returns 
   */
  UserInsertDOM() {
    return `
      <div class="insert">
        <span class="insert-likes"></span>
        <span class="insert-price">${this._data.price}€ / jour</span>
      </div>
    `;
  }
}