import Api from '../api/index.js'

export default class MediaServices {
  constructor() {
    this.api = new Api();
  }

  async getAllMedia() {
    const { media } = await this.api.get();
    return media;
  }

  async getMediaByPhotographerId(id) {
    const allMedia = await this.getAllMedia();
    const mediaList = [];

    allMedia.find(media => {
      media.photographerId === parseInt(id) && mediaList.push(media);
    });

    return mediaList;
  }
}
