document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const audio = document.getElementById("audioPlayer");
  const captionsBox = document.querySelector(".captions-box");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

  // Sørg for, at lyden starter mutet
  audio.muted = true;
  muteIcon.src = "img/volume-off.svg"; // Ikon viser, at lyden er mutet

  // Start lyd og captions ved klik
  const startPlayback = () => {
    // Sæt sessionStorage for fremtidige navigeringer
    sessionStorage.setItem("audioStarted", "true");

    // Start lyd
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => console.error("Playback error:", error));
    }

    // Tilføj klassen for at starte CSS-animationer
    captionsBox.classList.add("play-captions");

    // Fade-out overlay
    startButton.classList.add("hidden");
    setTimeout(() => {
      startButton.style.display = "none";
    }, 500);
  };

  // Event Listener: Klik på startknap
  startButton.addEventListener("click", startPlayback);

  // Funktion: Skift mute/unmute
  const toggleMute = () => {
    audio.muted = !audio.muted;
    muteIcon.src = audio.muted ? "img/volume-off.svg" : "img/volume-on.svg";
  };

  // Event Listener: Mute-knap
  muteButton.addEventListener("click", toggleMute);

  // Funktion: Juster volumen
  const adjustVolume = (event) => {
    audio.volume = event.target.value;
  };

  // Event Listener: Volumen-slider
  volumeSlider.addEventListener("input", adjustVolume);
});
