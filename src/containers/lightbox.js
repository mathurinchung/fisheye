export default class LightboxContainer {
  constructor(galleryElements, element) {
    this.lightboxMedia = document.querySelector('.lightbox-media');
    this.lightboxCaption = document.querySelector('#lightbox figcaption');

    this.galleryElements = galleryElements;
    this.current = this.galleryElements.indexOf(element);
  }

  handleLightboxMedia() {
    this.galleryElements.forEach((element, index) => {
      const media = element.querySelector('.media');
      if (media.tagName === 'VIDEO') {
        media.setAttribute('controls', '');
      }

      if (this.current === index) {
        this.lightboxMedia.innerHTML = media.outerHTML;
        this.lightboxCaption.innerHTML = media.alt || media.title;
      }
    });
  }

  handlePrev() {
    this.current = (this.current < 1) ? this.galleryElements.length - 1 : this.current - 1;
    this.handleLightboxMedia();
  }

  handleNext() {
    this.current = (this.current >= this.galleryElements.length - 1) ? 0 : this.current + 1;
    this.handleLightboxMedia();
  }
}