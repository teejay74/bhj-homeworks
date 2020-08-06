"use strict";
let revealBlock = document.getElementsByClassName("reveal");
let positionBlock;
const showBlock = () => {
	for(let block of revealBlock) {
		positionBlock = block.getBoundingClientRect();
		if(positionBlock.y >0 & positionBlock.y < 500) {
			block.classList.add("reveal_active")
		}
		else {
			block.classList.remove("reveal_active")
		}
	}
}
document.addEventListener('scroll', showBlock);