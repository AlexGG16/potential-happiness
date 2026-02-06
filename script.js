const buttonsArea = document.getElementById("buttonsArea");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const counterText = document.getElementById("counterText");

let noCount = 0;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function moveNoButton() {
  if (!noBtn.classList.contains("floating")) return;

  const padding = 10;

  const maxX = buttonsArea.clientWidth - noBtn.offsetWidth - padding;
  const maxY = buttonsArea.clientHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * Math.max(maxX, padding) + padding;
  const y = Math.random() * Math.max(maxY, padding) + padding;

  noBtn.style.left = `${clamp(x, padding, maxX)}px`;
  noBtn.style.top = `${clamp(y, padding, maxY)}px`;
  noBtn.style.transform = `translate(0, 0)`;
}

function growYesButton() {
  const scale = Math.min(1 + noCount * 0.18, 2.5);
  yesBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("mouseenter", () => {
  if (!noBtn.classList.contains("floating")) {
     noBtn.classList.add("floating");
     noBtn.style.left = "65%";
     noBtn.style.top = "50%";
     noBtn.style.transform = "translate(-50%, -50%)";
  }
  moveNoButton();
  noCount += 1;
  growYesButton();

  const messages = [
    "what did I JUST say 😤",
    "be so fr 😭",
    "STOOOOPPPP😡😡",
    "are you done yet 🥱",
    "you meant YES 😠",
    "try again 🙃",
    "that button seems broken 😆",
    "nope, not allowed 🙂‍↔️"
  ];
  if (counterText) {
    counterText.textContent = messages[(noCount - 1) % messages.length];
  }

 });
