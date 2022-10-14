class PhotographerService {
  static api = new Api("/data/photographers.json");

  static async getPhotographers() {
    const { photographers } = await this.api.get();

    return photographers;
  }
}