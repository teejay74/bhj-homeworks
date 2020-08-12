"use strict";
const helper = document.getElementsByClassName("has-tooltip");
let div = document.createElement('div');


const clickHelp = (e) => {
	e.preventDefault();
	if(e.target.querySelectorAll(".tooltip").length > 0) e.target.removeChild(div)
	else {
		let curPosition = e.target.getBoundingClientRect();
		div.className = "tooltip";
		div.textContent = e.target.title;
		div.style = `position: absolute; display: block; left: ${curPosition.x}px`
		e.target.appendChild(div)
	}
	
}

for(let help of helper) {
	help.addEventListener('click', clickHelp)
}
