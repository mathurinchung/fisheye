export default class MediaTemplate {
  constructor(data) {
    this._data = data;
  }

  MediaCardDOM() {
    return `
      <article data-id="${this._data.id}">
        <a class="lnk-media open" href="javascript:void(0)">
          ${this._data.media}
        </a>
        <p class="caption">
          <span class="title">${this._data.title}</span>
          <span class="likes">${this._data.likes} <i class="fa fa-heart"></i></span>
        </p>
      </article>
    `;
  }
}