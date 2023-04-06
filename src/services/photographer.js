import Api from '../api/index.js'

export default class PhotographerServices {
  constructor() {
    this.api = new Api();
  }

  async getPhotographers() {
    const { photographers } = await this.api.get();
    return photographers;
  }

  async getPhotographerById(id) {
    const photographers = await this.getPhotographers()
    return photographers.find(photographer => photographer.id === parseInt(id));
  }
}
