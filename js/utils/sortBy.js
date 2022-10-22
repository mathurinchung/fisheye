export default class SortByUtils {
  constructor() {
    this._icon = document.querySelector("#icon");
    this._option = document.querySelector(".filters-option");
  }

  sortByPopularity() {}
  sortByDate() {}
  sortByTitle() {}
  sortByHandler() {}

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
    const filtersValue = document.querySelector(".filters-value");
    let open = false;

    filtersSelectors.forEach(el => {
      el.addEventListener("click", () => {
        open = !open;
        open ? this.openFilters() : this.closeFilters();
      });
    });

    filtersItem.forEach(item => item.addEventListener("click", () => {
      filtersValue.textContent = item.textContent;
      this.closeFilters();
      open = false;
    }));
  }
}