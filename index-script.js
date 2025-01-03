document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

  // Start audio playback on page load
  audio.play().catch(error => console.log("Autoplay blocked by browser:", error));

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