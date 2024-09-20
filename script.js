document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");

  setTimeout(() => {
    flower.style.display = "inherit";
    word.style.display = "none";
  }, 2000);

  setInterval(createRaindrop, 100);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  
  body.appendChild(rainDrop);
  
  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}
