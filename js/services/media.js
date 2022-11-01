import Api from "../api/index.js";

/**
 * 
 */
export default class MediaService extends Api {
  /**
   * 
   * @returns 
   */
  static async getAllMedia() {
    const { media } = await this.get();

    return media;
  }

  /**
   * 
   * @param {*} id 
   * @returns 
   */
  static async getMediaByPhotographerId(id) {
    const allMedia = await this.getAllMedia();
    const mediaList = [];
    allMedia.find(media => { media.photographerId == id && mediaList.push(media) });

    return mediaList;
  }
}