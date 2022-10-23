export default class LikesUtils {
  constructor() {
    this.insertLikes = document.querySelector(".insert-likes");
    this._likes = 0;
  }

  likeHandler(e) {
    const currentLike = e.target.closest("[data-like]");
    const likes = currentLike.querySelector(".caption .likes").innerText

    if (currentLike.dataset.like === "false") {
      currentLike.dataset.like = true;
      currentLike.dataset.likes = parseInt(likes) + 1;
      currentLike.querySelector(".caption .likes").innerHTML = `${parseInt(likes) + 1} <i class="fa fa-heart"></i>`

      this._likes++;
      this.insertLikes.innerHTML = `${this._likes} <i class="fa fa-heart"></i>`
    } else {
      currentLike.dataset.like = false;
      currentLike.dataset.likes = parseInt(likes) - 1;
      currentLike.querySelector(".caption .likes").innerHTML = `${parseInt(likes) - 1} <i class="far fa-heart"></i>`

      this._likes--;
      this.insertLikes.innerHTML = `${this._likes} <i class="fa fa-heart"></i>`
    }
  }

  launch() {
    const likeButton = [ ...document.querySelectorAll(".likes") ];
    [ ...document.querySelectorAll(".likes") ].map(like => this._likes += parseInt(like.innerText));

    likeButton.forEach(like => like.addEventListener("click", this.likeHandler.bind(this)));

    this.insertLikes.innerHTML = `${this._likes} <i class="fa fa-heart"></i>`
  }
}