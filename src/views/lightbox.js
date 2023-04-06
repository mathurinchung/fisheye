export default class LightboxViews {
  constructor(data) {
    this.data = data;
  }

  LightboxDOM() {
    return `
      <figure id="lightbox">
        <div class="lightbox-media"></div>
        <figcaption></figcaption>

        <i class="icon-arrow-left"></i>
        <i class="icon-arrow-right"></i>
        <i class="icon-close"></i>
      </figure>

    `;
  }
}