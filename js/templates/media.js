/**
 * 
 */
export default class MediaTemplate {
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
  MediaCardDOM() {
    return `
      <article data-id="${this._data.id}" data-user-like="false" data-likes="${this._data.likes}" data-date="${this._data.date}" data-title="${this._data.title}">
        <a class="lnk-media open" href="javascript:void(0)">
          ${this._data.media}
        </a>
        <p class="caption">
          <span class="title">${this._data.title}</span>
          <span class="like-text">${this._data.likes}</span>
          <span class="like-icon" tabindex="0"><i class="far fa-heart" aria-label="likes"></i></span>
        </p>
      </article>
    `;
  }
}