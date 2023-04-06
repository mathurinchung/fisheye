import LikeViews from '../views/like.js';
import LikeContainer from '../containers/like.js';

export default class LikeObserver {
  constructor() {
    this.likeViews = new LikeViews();
    this.likeContainer = new LikeContainer();
  }

  init() {
    this.likeViews.NumberLikesDOM();

    const likeIconsElements = document.querySelectorAll('.like-icon');
    likeIconsElements.forEach(element => element.addEventListener('click', this.likeContainer.handleLike));
  }
}
