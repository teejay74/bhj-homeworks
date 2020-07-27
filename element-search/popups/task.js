"use strict";
let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
let modalSuccess = document.getElementById("modal_success");
let modalActive;
let modalsClose = document.getElementsByClassName(
  "modal__close modal__close_times"
);

for (let modalClose of modalsClose) {
  modalClose.onclick = () => {
    modalActive = document.querySelector(".modal_active");
    modalActive.classList.remove("modal_active");
  };
}

let modalShow = document.querySelector(".show-success");
modalShow.onclick = () => {
  modalActive = document.querySelector(".modal_active");
  modalActive.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};
