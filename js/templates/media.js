export default class MediaTemplate {
  constructor(data) {
    this._data = data;
  }

  MediaCardDOM() {
    return `
      <article>
        <a href="">
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