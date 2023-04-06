export default class SortbyViews {
  constructor() {}

  SortbyDOM() {
    return `
      <h3>Trier par</h3>
      <button class="sortby-button" type="button"><span class="sortby-value">Popularité</span><i class="icon-dropdown"></i></button>
      <ul class="sortby-list">
        <li class="sortby-item">Popularité</li>
        <li class="sortby-item">Date</li>
        <li class="sortby-item">Titre</li>
      </ul>
    `;
  }
}