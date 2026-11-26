
const likeButton = document.querySelector('.like-button-js');
likeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('liked')) {
    likeButton.classList.remove('liked');
    likeButton.textContent = '♡ いいね！';
  } else {
    likeButton.classList.add('liked');
    likeButton.textContent = '♥ いいね済み';
  }
});


const favButton = document.querySelector('.fav-button-js');
favButton.addEventListener('click', () => {
  if (favButton.classList.contains('active')) {
    favButton.classList.remove('active');
    favButton.textContent = '☆ お気に入り';
  } else {
    favButton.classList.add('active');
    favButton.textContent = '★ 登録済み！';
  }
});


const followButton = document.querySelector('.follow-button-js');
followButton.addEventListener('click', () => {
  if (followButton.classList.contains('active')) {
    followButton.classList.remove('active');
    followButton.textContent = '＋ フォローする';
  } else {
    followButton.classList.add('active');
    followButton.textContent = '✓ フォロー中';
  }
});