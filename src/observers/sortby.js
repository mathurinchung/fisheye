import SortbyViews from '../views/sortby.js';
import SortbyContainer from '../containers/sortby.js';

export default class SortbyObserver {
  constructor(galleryElements) {
    this.galleryElements = galleryElements;
    this.sortbyViews = new SortbyViews();
    this.sortbyContainer = new SortbyContainer(this.galleryElements);
  }

  init() {
    document.querySelector('.sortby').innerHTML = this.sortbyViews.SortbyDOM();

    const sortbyButtonElement = document.querySelector('.sortby-button');
    sortbyButtonElement.addEventListener('click', () => {
      document.querySelector('.sortby-button').classList.toggle('open');
      document.querySelector('.sortby-list').classList.toggle('open');
    });

    const sortbyValueElement = document.querySelector('.sortby-value');
    const sortbyItemsElements = document.querySelectorAll('.sortby-item');
    sortbyItemsElements.forEach(element => element.addEventListener('click', () => {
      document.querySelector('.sortby-button').classList.toggle('open');
      document.querySelector('.sortby-list').classList.toggle('open');
      this.sortbyContainer.handleSortby(element.textContent);
      sortbyValueElement.textContent = element.textContent;
    }));

    this.sortbyContainer.handleSortby(sortbyValueElement.textContent)
  }
}