export default class PhotographerViews {
  constructor(data) {
    this.data = data;
  }

  PhotographerCardDOM() {
    return (`
      <li class="photographer-card">
        <a href="/photographer.html?id=${ this.data.id }">
          <figure>
            <img src="${ this.data.portrait }" alt="${ this.data.name }" />
            <figcaption>
              <h3>${ this.data.name }</h3>
              <h4>${ this.data.location }</h4>
              <p class="tagline">${ this.data.tagline }</p>
              <p class="price">${ this.data.price }€/jour</p>
            </figcaption>
          </figure>
        </a>
      </li>
    `);
  }

  PhotographerTitleDOM() { return `Fisheye - ${ this.data.name }`; }

  PhotographerBannerDOM() {
    return `
      <div class="info">
        <h2>${ this.data.name }</h2>
        <p class="location">${ this.data.location }</p>
        <p class="tagline">${ this.data.tagline }</p>
      </div>
      <button class="contact-me" type="button">Contactez-moi</button>
      <img src=${ this.data.portrait } alt="${ this.data.name }">
    `;
  }

  PhotographerInsertDOM() {
    return `
      <span class="insert-likes"><span class="number"></span><i class="icon-heart"></i></span>
      <span class="insert-price">${ this.data.price }€ / jour</span>
    `;
  }
}
