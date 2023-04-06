export default class SortbyContainer {
  constructor(galleryElements) {
    this.galleryElements = galleryElements;
  }

  #handleSortbyPopularity(a, b) {
    const likesA = parseInt(a.dataset.likes);
    const likesB = parseInt(b.dataset.likes);
    return (likesA < likesB) ? 1 : (likesA == likesB) ? 0 : -1;
  }

  #handleSortbyDate(a, b) {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return (dateA < dateB) ? 1 : (dateA == dateB) ? 0 : -1;
  }

  #handleSortbyTitle(a, b) {
    const titleA = a.dataset.title;
    const titleB = b.dataset.title;
    return (titleA < titleB) ? -1 : 1;
  }

  handleSortby(sortbyValue) {
    switch(sortbyValue) {
      case 'Popularité':
        this.galleryElements.sort(this.#handleSortbyPopularity);
        break;
      case 'Date':
        this.galleryElements.sort(this.#handleSortbyDate);
        break;
      case 'Titre':
        this.galleryElements.sort(this.#handleSortbyTitle);
        break;
    }

    this.galleryElements.forEach(element => document.querySelector('.gallery').appendChild(element));
  }
}