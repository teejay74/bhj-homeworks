"use strict";
const elementTimer = document.getElementById("timer");
let hh = "00";
let mm = "00";
let ss = elementTimer.textContent;

const timer = function () {
  ss -= 1;
  if (ss < 10) ss = "0" + ss;
  elementTimer.textContent = hh + ":" + mm + ":" + ss;
  if (ss == 0) {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
    fileDownload();
  }
};
let timerId = setInterval(timer, 1000);

function fileDownload() {
  const redirectUrl = document.getElementById("urlRedirect");
  redirectUrl.href = "demo.gif";
  redirectUrl.click();
}
