"use strict";
const getHole = (index) => document.getElementById(`hole${index}`);
const win = document.getElementById("dead");
const los = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = () => {
    if (getHole(index).classList.contains("hole_has-mole")) {
      win.textContent++;
      if (win.textContent == 10) {
        alert("Победа!");
        win.textContent = 0;
        los.textContent = 0;
      }
    } else {
      los.textContent++;
      if (los.textContent == 5) {
        alert("Вы проиграли!");
        win.textContent = 0;
        los.textContent = 0;
      }
    }
  };
}
