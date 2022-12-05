const colorConverter = document.querySelector("#button");
const bgColor = document.querySelector("#canvas");

function randomColor() {
  let value = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + value[Math.floor(Math.random() * 16)];
  }
  return hash;
}

colorConverter.addEventListener("click", () => {
  bgColor.style.backgroundColor = randomColor();
});
