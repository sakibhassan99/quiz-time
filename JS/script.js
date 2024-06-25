const startBtn = document.querySelector("#start-btn");
const mainSection = document.querySelector(".main");
const volumeIcon = document.querySelector(".volume-icon-container");
const footerText = document.querySelector(".footer-text");
const audio = new Audio("/assets/audio/music.mp3");

function playAudio() {
  audio.play();
  audio.volume = 0.2;
  audio.currentTime = 10;
}

function pauseAudio() {
  audio.pause();
  audio.currentTime = 10;
}

startBtn.addEventListener("click", () => {
  mainSection.classList.add("active");
  footerText.classList.add("active");
});

volumeIcon.addEventListener("click", () => {
  volumeIcon.classList.toggle("volume");

  if (volumeIcon.classList.contains("volume")) {
    playAudio();
  } else {
    pauseAudio();
  }
});
