const knapp = document.querySelector('.knapp');
const reward = new Audio('2026/Rodalyktoroverbordet.m4a');

knapp.addEventListener('click', () => {
  reward.currentTime = 0;
  reward.play();
});