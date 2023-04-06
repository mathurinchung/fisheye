export default class MediaViews {
  constructor(data) {
    this.data = data;
  }

  MediaCardDOM() {
    return `
    <li class="media-item" data-id="${ this.data.id }" data-user-like="false" data-likes="${ this.data.likes }" data-date="${ this.data.date }" data-title="${ this.data.title }">
      <figure>
        ${ this.data.media }

        <figcaption>
          <span class="title">${ this.data.title }</span>
          <span class="like-number">${ this.data.likes }</span>
          <span class="like-icon"><i class="fa-xs fa-regular fa-heart"></i></span>
        </figcaption>
      </figure>
    </li>
    `;
  }
}
