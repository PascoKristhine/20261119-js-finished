const button = document.querySelector('.btn-sparkle');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  

  const size = Math.random() * 7 + 6;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  
  const x = Math.random() * (button.offsetWidth - 10) + 5;
  const y = Math.random() * (button.offsetHeight - 10) + 5;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  
  button.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2800);
}

function sparkleEffect() {
  setInterval(createSparkle, 450);
}

sparkleEffect();