
const advContainers = document.querySelectorAll('.emerald, .rose');

advContainers.forEach((container) => {
  const btn = container.querySelector('.btn-inner-adv');
  const rect = container.querySelector('.btn-rect-adv');

  btn.addEventListener('click', () => {
    
    rect.classList.remove('active');
    setTimeout(() => {
      rect.classList.add('active');
    }, 10);
  });
});