const zoomImage = document.querySelector('.zoom-image');
const button = document.querySelector('.center-button');
const cover = document.querySelector('.cover');
const audio = document.createElement("audio");
audio.src = "2025/filename.mp3";
audio.volume = 0.1;
audio.loop = false;

document.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = e.clientX - buttonX;
  const dy = e.clientY - buttonY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const scale = 1 + Math.max(0, 200 - distance) / 300;
  zoomImage.style.transform = `scale(${scale.toFixed(2)})`;
});

button.addEventListener('click', () => {
  cover.classList.add('fade-out');
  setTimeout(() => {
    cover.style.display = 'none';
  }, 6); 
  audio.play()
  audio.addEventListener("ended",() => {
    audio.volume = Math.min(1, audio.volume + 0.3);
    audio.currentTime = 0;
    audio.play();
    console.log(audio.volume)
  });
});

