/**
 * 
 */
class PhotographerModel {
  /**
   * 
   * @param {*} data 
   */
  constructor(data) {
    this._name = data.name;
    this._id = data.id;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._picture = data.portrait;
  }

  //
  get name() {
    return this._name;
  }

  //
  get id() {
    return this._id;
  }

  //
  get location() {
    return `${this._city}, ${this._country}`;
  }

  //
  get tagline() {
    return this._tagline;
  }

  //
  get price() {
    return this._price;
  }

  //
  get picture() {
    return `assets/photographers/${this._picture}`;
  }

  //
  get UserCardDOM() {
    return `
      <article>
        <a href="/photographer.html?id=${this.id}">
          <img src=${this.picture} alt=${this.name} />
          <h2>${this.name}</h2>
        </a>
        <h3>${this.location}</h3>
        <p class="tagline">${this.tagline}</p>
        <p class="price">${this.price}€/jour</p>
      </article>
    `;
  }
}