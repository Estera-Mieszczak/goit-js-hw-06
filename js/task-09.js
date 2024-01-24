function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const hexColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", changeBackground);
function changeBackground() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  hexColor.textContent = newColor;
}