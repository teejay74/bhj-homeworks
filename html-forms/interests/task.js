"use strict";
const checkBoxs = Array.from(document.getElementsByClassName("interest__check"));
const checked = (e) => {
	const checkBoxParrent = e.target.closest("ul").closest("li");
	const boxsChild = Array.from(e.target.closest("li").children);
     	if(boxsChild.length == 2) {
     		const boxChecked = Array.from(e.target.closest("li").querySelector(".interests_active").getElementsByClassName("interest__check"));
			for(let box of boxChecked) {
				box.checked = e.target.checked;
				}
	     }
	     if(checkBoxParrent != null) autoChecked(checkBoxParrent)
	}

const autoChecked = (target) => {
	let parrentBox = target.querySelector(".interest__check")
	parrentBox.indeterminate = true
	parrentBox.checked = false
	parrentBox = parrentBox.closest("ul").closest("li")
	if(parrentBox != null) autoChecked(parrentBox)
}

for(let checkBox of checkBoxs) {
	checkBox.addEventListener('change', checked); 
}

