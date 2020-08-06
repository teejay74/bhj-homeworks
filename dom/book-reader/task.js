"use strict";
const controlBook = document.getElementById("book");
const btnsFont = Array.from(controlBook.getElementsByClassName("font-size"));
const btnsColor = Array.from(controlBook.querySelector(".book__control_color").getElementsByClassName("color"));
const btnsBg = Array.from(controlBook.querySelector(".book__control_background").getElementsByClassName("color"));
const bookContent = controlBook.querySelector(".book__content");

const changeSize = (e) => {
	e.preventDefault();
	btnsFont[btnsFont.findIndex((el) => el.classList.contains("font-size_active"))].classList.remove("font-size_active");
	e.target.classList.add("font-size_active");
	let size = e.target.getAttribute("data-size");
	switch(size) {
		case 'small':
			if(bookContent.classList.contains("font-size_big")) {bookContent.classList.remove("font-size_big")}
			bookContent.classList.add("font-size_small")
		break;
		case 'big': 
			if(bookContent.classList.contains("font-size_small")) {bookContent.classList.remove("font-size_small")}
			bookContent.classList.add("font-size_big")
		break;
		case null:
			if(bookContent.classList.contains("font-size_small")) {bookContent.classList.remove("font-size_small")}
			else if(bookContent.classList.contains("font-size_big")) {bookContent.classList.remove("font-size_big")}
	}

}

const changeColor = (e) => {
	e.preventDefault();
	btnsColor[btnsColor.findIndex((el) => el.classList.contains("color_active"))].classList.remove("color_active");
	e.target.classList.add("color_active");
	let color = e.target.getAttribute("data-color");
		switch(color) {
		case 'gray':
			if(bookContent.classList.contains("book_color-whitesmoke")) {bookContent.classList.remove("book_color-whitesmoke")}
			bookContent.classList.add("book_color-gray")
		break;
		case 'whitesmoke': 
			if(bookContent.classList.contains("book_color-gray")) {bookContent.classList.remove("book_color-gray")}
			bookContent.classList.add("book_color-whitesmoke")
		break;
		case null:
			if(bookContent.classList.contains("book_color-gray")) {bookContent.classList.remove("book_color-gray")}
			else if(bookContent.classList.contains("book_color-whitesmoke")) {bookContent.classList.remove("book_color-whitesmoke")}

		}

}

const changeBg = (e) => {
	e.preventDefault();
	btnsBg[btnsBg.findIndex((el) => el.classList.contains("color_active"))].classList.remove("color_active");
	e.target.classList.add("color_active");
	let color = e.target.getAttribute("data-color");
		switch(color) {
		case 'gray':
			if(bookContent.classList.contains("book_bg-black")) {bookContent.classList.remove("book_bg-black")}
			bookContent.classList.add("book_bg-gray")
		break;
		case 'black': 
			if(bookContent.classList.contains("book_bg-gray")) {bookContent.classList.remove("book_bg-gray")}
			bookContent.classList.add("book_bg-black")
		break;
		case null:
			if(bookContent.classList.contains("book_bg-gray")) {bookContent.classList.remove("book_bg-gray")}
			else if(bookContent.classList.contains("book_bg-black")) {bookContent.classList.remove("book_bg-black")}
			
	}

}

for(let btnFont of btnsFont) {
	btnFont.addEventListener('click', changeSize);
}

for(let btnColor of btnsColor) {
	btnColor.addEventListener('click', changeColor);
}

for(let btnBg of btnsBg) {
	btnBg.addEventListener('click', changeBg);
}




