export default class SortByUtils {
  constructor() {
    this._media = [ ...document.querySelectorAll("[data-id]") ];
    this._icon = document.querySelector("#icon");
    this._filtersValue = document.querySelector(".filters-value");
    this._option = document.querySelector(".filters-option");
  }

  sortByPopularity(a, b) {
    const likesA = parseInt(a.dataset.likes);
    const likesB = parseInt(b.dataset.likes);
    return ((likesA < likesB) ? 1 : (likesA == likesB) ? 0 : -1);
  }

  sortByDate(a, b) {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return ((dateA < dateB) ? 1 : (dateA == dateB) ? 0 : -1);
  }

  sortByTitle(a, b) {
    const titleA = a.dataset.title;
    const titleB = b.dataset.title;
    return (titleA < titleB) ? -1 : 1;
  }

  sortByHandler() {
    let sorted = [];

    switch (this._filtersValue.textContent) {
      case "Popularité": sorted = this._media.sort(this.sortByPopularity);
      break;

      case "Date": sorted = this._media.sort(this.sortByDate);
      break;

      case "Titre": sorted = this._media.sort(this.sortByTitle);
      break;
    }

    sorted.forEach(el => document.querySelector(".photographer_gallery").appendChild(el));
  }

  openFilters() {
    this._icon.className += " open";
    this._option.style.display = "block";
  }

  closeFilters() {
    this._icon.className = "filters-button";
    this._option.style.display = "none";
  }

  launch() {
    const filtersSelected = document.querySelector(".filters-selected");
    const filtersButton = document.querySelector(".filters-button");
    const filtersSelectors = [ filtersSelected, filtersButton ];
    const filtersItem = document.querySelectorAll(".filters-item");
    let open = false;

    filtersSelectors.forEach(el => {
      el.addEventListener("click", () => {
        open = !open;
        open ? this.openFilters() : this.closeFilters();
      });
    });

    filtersItem.forEach(item => item.addEventListener("click", () => {
      this._filtersValue.textContent = item.textContent;

      this.sortByHandler();
      this.closeFilters();
      open = false;
    }));
  }
}