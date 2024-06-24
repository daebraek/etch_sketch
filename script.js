const padSize = 500;
let rows = 16;
let cols = 16;

const size = document.getElementById("size");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
let colorChange = null;

eraser.className = "off";

eraser.addEventListener("click", function () {
  if (eraser.className == "off") {
    eraser.classList.replace("off", "on");
    eraser.style.backgroundColor = "red";
  } else if (eraser.className == "on") {
    eraser.classList.replace("on", "off");
    eraser.style.backgroundColor = "";
  }
  console.log(eraser.className);
});

const sketchPad = document.getElementById("sketchpad");
sketchPad.style.height = `${padSize}px`;
sketchPad.style.width = `${padSize}px`;

color.addEventListener("click", function () {
  colorChange = prompt("Choose a color");
});

size.addEventListener("click", function () {
  newSize = prompt("Choose your size");
  makeGrid(newSize, newSize);
});

function makeGrid(rows, cols) {
  sketchPad.innerHTML = "";
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${padSize / cols}px`;
    cell.style.height = `${padSize / rows}px`;

    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = colorChange;
    });

    cell.addEventListener("mouseover", function () {
      if (eraser.className == "on") {
        cell.style.backgroundColor = "aqua";
      }
    });

    sketchPad.appendChild(cell);
  }
}
makeGrid(rows, cols);
