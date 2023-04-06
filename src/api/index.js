export default class Api {
  constructor() {
    this.baseUrl = './src/data/photographers.json';
  }

  async get() {
    const response = await fetch(this.baseUrl, { headers: { 'Content-Type': 'application/json' }, method: 'GET' });

    if (!response.ok) throw new Error((await response.json()).message);
    return response.json();
  }
}
