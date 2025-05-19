// Tüm drum butonlarını seç
const drumButtons = document.querySelectorAll(".drum-button");

// Her buton için tıklama olayını dinle
drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const soundName = button.dataset.sound;
    playSound(soundName);
    animateButton(button);
  });
});

// Klavyeden basıldığında çalışacak
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  const keyMap = {
    b: "boom",
    c: "clap",
    h: "hihat",
    k: "kick",
    o: "openhat",
    r: "ride",
    s: "snare",
    ı: "tink",
    t: "tom",
  };

  const soundName = keyMap[key];
  if (soundName) {
    playSound(soundName);
    const button = document.querySelector(`[data-sound="${soundName}"]`);
    if (button) animateButton(button);
  }
});

// Ses oynatma fonksiyonu
function playSound(name) {
  const audio = new Audio(`src/audio/${name}.wav`);
  audio.play();
}

// Basılan butona ışık efekti
function animateButton(button) {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 150);
}
