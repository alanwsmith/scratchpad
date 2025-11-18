function randomFloat(min, max) {
  return (Math.random() * (max - min)) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function url() {
  return new URL(window.location.href);
}

export default class {
  bittyReady() {
    this.api.setProp("--load-hider", "1");
  }
}
