document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const audio = document.getElementById("audioPlayer");
  const captionsBox = document.querySelector(".captions-box");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

startButton.addEventListener("click", () => {
    // Start lydafspilning
    audio.muted = false;
    audio.play().catch(error => console.log("Playback error:", error));

    // Start captions og skjul startknap
    captionsBox.style.display = "block";
    startButton.style.display = "none";	
	
  // Initialize mute icon on page load
  muteIcon.src = audio.muted ? "img/volume-off.svg" : "img/volume-on.svg";

  // Start audio playback on page load
  audio.play().catch(error => console.log("Autoplay blocked by browser:", error));}

  // Mute/Unmute functionality
  muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteIcon.src = audio.muted ? "img/volume-off.svg" : "img/volume-on.svg";
  });

  // Volume control functionality
  volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
  });
});