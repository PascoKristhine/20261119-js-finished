/* クリックで変化 */
const btn = document.querySelector('#fade-button-js');
btn.addEventListener('click', () => {
  btn.style.backgroundColor = '#ffdfba'; 
  setTimeout(() => {
    btn.style.backgroundColor = '#cdb4db';
  }, 500);
});

/* ランダムに変化（パステルカラー限定） */
const btnRandom = document.querySelector('#fade-button-random');
btnRandom.addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  btnRandom.style.backgroundColor = `hsl(${hue}, 80%, 82%)`;
});