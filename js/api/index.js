/**
 * 
 */
class Api {
  /**
   * 
   * @param {String} url 
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * 
   * @returns 
   */
  async response() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) throw new Error(response);

      return response.json();
    } catch(error) {
      console.error(error);
    }
  }

  /**
   * 
   * @returns 
   */
  get() {
    return this.response();
  }
}