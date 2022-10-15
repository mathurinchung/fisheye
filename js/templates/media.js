export default class MediaTemplate {
  constructor(data, type) {
    this._data = data;
    this._type = type;
    this._path = `assets/images/media/`;
  }

  ImageDOM() {
    return `
      <img class="media" src="${this._path + this._data.image}" alt="${this._data.title}" />
    `;
  }

  VideoDOM() {
    const extension = this._data.video.split(".")[1];

    return `
      <video class="media">
        <source src="${this._path + this._data.video}" type="video/${extension}" />
      </video>
    `;
  }

  MediaCardDOM() {
    return `
      <article>
        <a href="">
          ${(this._type === "image") ? this.innerHTML = this.ImageDOM() : this.innerHTML = this.VideoDOM()}
        </a>
        <p class="caption"><span class="title">${this._data.title}</span><span class="likes">${this._data.likes} <i class="fa fa-heart"></i></span></p>
      </article>
    `;
  }
}