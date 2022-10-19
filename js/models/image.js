import MediaModel from "../models/media.js"

export default class ImageModel extends MediaModel {
  constructor(data) {
    super(data);
    this._image = data.image;
  }

  get media() {
    return `<img class="media" src="${this.path + this._image}" />`;
  }
}