import PhotographerModel from "../models/photographer.js";
import PhotographerViews from "../views/photographer.js";

export default class PhotographerFactory {
  constructor(data) {
    this.data = new PhotographerModel(data);

    return new PhotographerViews(this.data);
  }
}
