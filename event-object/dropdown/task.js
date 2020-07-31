"use strict";
const dropDown = (e) => {
	 e.target.nextElementSibling.classList.toggle("dropdown__list_active");
}
const rollUp = (e) => {
	 e.preventDefault();
	 console.log(e.target.textContent)
	 e.target.closest("ul").classList.remove("dropdown__list_active");
	 e.target.closest("ul").previousElementSibling.textContent = e.target.textContent;
}

const topMenu = document.getElementsByClassName("dropdown");

for(let menu of topMenu) {
	menu.querySelector(".dropdown__value").addEventListener('click', dropDown);
	let itemMenu = menu.getElementsByClassName("dropdown__link");
		for(let item of itemMenu) {
			item.addEventListener('click', rollUp);;
		}
}
