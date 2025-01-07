document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const captionsBox = document.querySelector(".captions-box");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

  // Sørg for, at lyden starter muted
  audio.muted = true;

  // Funktion: Start lyd og captions efter interaktion
  const startAudioAndCaptions = () => {
    document.removeEventListener("click", startAudioAndCaptions); // Fjern listener for at undgå gentagne kald

    // Sæt sessionStorage for fremtidige navigeringer
    sessionStorage.setItem("audioStarted", "true");

    // Start lyd
    audio.play()
      .then(() => {
        console.log("Audio started playing.");
        captionsBox.classList.add("play-captions"); // Tilføj klassen for at starte CSS-animationer
      })
      .catch((error) => {
        console.error("Playback error:", error);
      });
  };

  // Mute/unmute funktion
  const toggleMute = () => {
    audio.muted = !audio.muted;
    muteIcon.src = audio.muted ? "img/volume-off.svg" : "img/volume-on.svg";
  };

  // Event Listener: Mute-knap
  muteButton.addEventListener("click", toggleMute);

  // Juster volumen funktion
  const adjustVolume = (event) => {
    audio.volume = event.target.value;
  };

  // Event Listener: Volumen-slider
  volumeSlider.addEventListener("input", adjustVolume);

  // Kontroller sessionStorage
  if (sessionStorage.getItem("audioStarted")) {
    console.log("SessionStorage found. Waiting for user interaction.");
    // Lyt efter interaktioner for at starte lyd
    document.addEventListener("click", startAudioAndCaptions, { once: true });
  } else {
    console.log("No sessionStorage found. Requiring explicit user interaction.");
    // Kræv brugerinteraktion for første start
    document.addEventListener("click", startAudioAndCaptions, { once: true });
  }
});
