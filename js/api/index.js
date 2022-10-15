/**
 * 
 */
 export default class Api {
  static _url = "/data/photographers.json";

  static async response() {
    try {
      const response = await fetch(this._url);

      if (!response.ok) throw new Error(response);

      return response.json();
    } catch(error) {
      console.error(error);
    }
  }

  static get() {
    return this.response();
  }
}