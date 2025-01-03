document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const audio = document.getElementById("audioPlayer");
  const captionsBox = document.querySelector(".captions-box");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

	// Start med muted lyd
audio.muted = true;

	// Når startknappen klikkes
startButton.addEventListener("click", () => {

	// Start lydafspilning
audio.play().catch((error) => console.log("Playback error:", error));

    // Start captions
captionsBox.style.display = "block";

    // Fade-out overlay
startButton.classList.add("hidden");

    // Fjern startknappen efter transition
setTimeout(() => startButton.style.display = "none", 500);
  });

    // Initialize mute icon on page load
muteIcon.src = audio.muted ? "img/volume-off.svg" : "img/volume-on.svg";

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
