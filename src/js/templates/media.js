export default class MediaTemplate {
  constructor(data) {
    this._data = data;
  }

  MediaCardDOM() {
    return `
      <article data-id="${this._data.id}" data-like="false" data-likes="${this._data.likes}" data-date="${this._data.date}" data-title="${this._data.title}">
        <a class="lnk-media open" href="javascript:void(0)">
          ${this._data.media}
        </a>
        <p class="caption">
          <span class="title">${this._data.title}</span>
          <span class="likes">${this._data.likes} <i class="far fa-heart"></i></span>
        </p>
      </article>
    `;
  }
}