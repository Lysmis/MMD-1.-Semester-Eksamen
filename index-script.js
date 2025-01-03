document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const audio = document.getElementById("audioPlayer");
  const captions = document.querySelectorAll(".caption");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");
  const volumeSlider = document.getElementById("volumeSlider");

  // Sørg for, at lyden starter mutet
  audio.muted = true;
  muteIcon.src = "img/volume-off.svg"; // Ikon viser, at lyden er mutet

  // Start captions-sekvens efter klik
  const startCaptions = () => {
    let delay = 0;
    captions.forEach((caption) => {
      setTimeout(() => {
        caption.style.transition = "opacity 1s";
        caption.style.opacity = "1"; // Fade ind
        setTimeout(() => {
          caption.style.opacity = "0"; // Fade ud
        }, 14000); // Forbliv synlig i 14 sekunder
      }, delay);
      delay += 15000; // 15 sekunders interval mellem captions
    });
  };

  // Start lyd og captions ved klik
  const startPlayback = () => {
    // Start lyd
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => console.error("Playback error:", error));
    }

    // Start captions-sekvens
    startCaptions();

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
