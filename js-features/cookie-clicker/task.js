"use strict";
const elementJPG = document.getElementById("cookie");
let elementCounter = document.getElementById("clicker__counter");
let elementClickerSpeed = document.getElementById("clicker__speed");
let start = new Date();

elementJPG.onclick = function () {
  elementCounter.textContent++;
  if (elementJPG.width === 200) {
    elementJPG.width = 300;
  } else {
    elementJPG.width = 200;
  }

  let end = new Date();
  elementClickerSpeed.textContent =
    1 / ((end.getTime() - start.getTime()) / 1000);
  start = end;
};
