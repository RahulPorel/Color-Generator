const colors = ["red", "yellow", "blue"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
let bgColor = document.querySelector(".container");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNo();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNo() {
  return Math.floor(Math.random() * colors.length);
}
