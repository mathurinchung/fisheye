export default class LikeContainer {
  handleLike(e) {
    const currentLike = e.target.closest('[data-user-like]');
    const likeNumber = currentLike.querySelector('.like-number');
    const likesText = parseInt(likeNumber.innerText);

    const insertNumberLikes = document.querySelector('.insert-likes .number');

    if (currentLike.dataset.userLike === 'false') {
      currentLike.dataset.userLike = true;
      likeNumber.innerHTML = likesText + 1;
      currentLike.querySelector('.like-icon').innerHTML = '<i class="icon-heart"></i>';
      insertNumberLikes.innerHTML = `${parseInt(insertNumberLikes.innerText) + 1}`;
    } else {
      currentLike.dataset.userLike = false;
      likeNumber.innerHTML = likesText - 1;
      currentLike.querySelector('.like-icon').innerHTML = '<i class="fa-xs fa-regular fa-heart"></i>';
      insertNumberLikes.innerHTML = `${parseInt(insertNumberLikes.innerText) - 1}`;
    }
  }
}