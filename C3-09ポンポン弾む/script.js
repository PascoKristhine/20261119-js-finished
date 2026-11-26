
const colors = [
  '#5e2129', 
  '#1d423a', 
  '#3b2847', 
  '#1c2536' 
];

let colorIndex = 0;
const button = document.querySelector('.btn-click-bounce');

button.addEventListener('click', () => {
 
  button.style.translate = '0 -7px';
  button.style.backgroundColor = colors[colorIndex];
  

  setTimeout(() => {
    button.style.translate = '0 0';
  }, 320);

  colorIndex = (colorIndex + 1) % colors.length;
});