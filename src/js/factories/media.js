import MediaModel from "../models/media.js"
import MediaTemplate from "../templates/media.js"

export default class MediaFactory {
  constructor(data) {
    this._data = new MediaModel(data);

    const type = (this._data.image !== undefined) ? "image" : "video";

    return new MediaTemplate(this._data, type);
  }
}