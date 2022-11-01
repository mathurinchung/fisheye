import Api from "../api/index.js";

/**
 * 
 */
export default class PhotographerService extends Api {
  /**
   * 
   * @returns 
   */
  static async getPhotographers() {
    const { photographers } = await this.get();

    return photographers;
  }

  /**
   * 
   * @param {*} id 
   * @returns 
   */
  static async getPhotographerById(id) {
    const photographers = await this.getPhotographers();
    const photographerById = photographers.find(photographer => photographer.id == id);

    return photographerById;
  }
}