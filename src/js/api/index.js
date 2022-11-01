/**
 * 
 */
 export default class Api {
  /**
   * Api URL
   */
  static _url = "/data/photographers.json";

  /**
   * 
   * @returns 
   */
  static async response() {
    try {
      const response = await fetch(this._url);

      if (!response.ok) throw new Error(response.status);

      return response.json();
    } catch(error) {
      console.error(error);
    }
  }

  /**
   * 
   * @returns 
   */
  static get() { return this.response(); }
}