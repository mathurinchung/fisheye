export default class SortByUtils {
  constructor() {
    this._filters = document.querySelector(".filters-container");
  }

  sortByHandler() {}

  sortByPopularity() {}

  sortByDate() {}

  sortByTitle() {}

  openFilters() {
    this._filters.style.display = "block";
  }

  closeFilters() {
    this._filters.style.display = "none";
  }

  launcher() {
    const openButton = document.querySelector(".filters-selected");
    const closeButton = document.querySelector(".filters-close");
    const filtersItem = document.querySelectorAll(".filters-item");
    const filtersValue = document.querySelector(".filters-value");

    openButton.addEventListener("click", () => this.openFilters());
    closeButton.addEventListener("click", () => this.closeFilters());

    filtersItem.forEach(item => item.addEventListener("click", () => {
      filtersValue.textContent = item.textContent;
      this.closeFilters();
    }));
  }
}