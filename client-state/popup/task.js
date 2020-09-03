"use strict";
let modalMain = document.getElementById("subscribe-modal");
modalMain.classList.add("modal_active");

modalMain.addEventListener('click', (e) => {if (e.target.classList.contains('modal__close'))
	modalMain.classList.remove("modal_active");
	document.cookie = "modalclose=true";

});

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
};

if (getCookie('modalclose')) {
	modalMain.classList.remove("modal_active");
}

else {
  	modalMain.classList.add("modal_active");
}


