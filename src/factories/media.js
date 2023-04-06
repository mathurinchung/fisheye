import ImageModel from "../models/image.js";
import VideoModel from "../models/video.js";
import MediaViews from "../views/media.js";

export default class MediaFactory {
  constructor(data) {
    if (data.image !== undefined) {
      this.data = new ImageModel(data);
    } else {
      this.data = new VideoModel(data);
    }

    return new MediaViews(this.data);
  }
}
