import { jsonOrThrowIfError } from "../utils";

export default class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  async get({ endpoint, headers }) {
    return jsonOrThrowIfError(await fetch(endpoint, { headers, method: 'GET' }));
  }
}