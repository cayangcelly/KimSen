const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');

yesBtn.addEventListener('click', () => {
  popup.innerHTML = "<h1>Yay! 💞</h1><p>Makacih udah cayanggg camaa akuuu 😚💗</p>";
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
