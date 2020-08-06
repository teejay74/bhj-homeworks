"use strict";
const adBlocks = Array.from(document.getElementsByClassName("rotator"));

for (let i = 0; i < adBlocks.length; i++) {
  const rotatorCase = Array.from(
    adBlocks[i].getElementsByClassName("rotator__case")
  );
  let current = 0;
  let sumCase = rotatorCase.length;
  const showBlock = (current) => {
    rotatorCase[rotatorCase.findIndex((el) => el.classList.contains("rotator__case_active"))].classList.remove("rotator__case_active");
    rotatorCase[current].classList.add("rotator__case_active");
  };

  const rotator = () => {
    if (current == sumCase) {
      current = 0;
    }
    let speed = rotatorCase[current].getAttribute("data-speed");
    let dataColor = rotatorCase[current].getAttribute("data-color");
    rotatorCase[current].setAttribute("style", `color: ${dataColor}`);
    setTimeout(rotator, speed);
    showBlock(current);
    current++;
  };

  rotator();
}
