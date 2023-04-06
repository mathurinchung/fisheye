export default class LikeViews {
  constructor() {
    this.likes = 0;
  }

  NumberLikesDOM() {
    const insertLikesText = document.querySelector('.insert-likes .number');
    const likeNumber = [ ...document.querySelectorAll(".like-number") ];
    likeNumber.map(like => this.likes += parseInt(like.textContent));

    insertLikesText.innerHTML = this.likes;
  }
}