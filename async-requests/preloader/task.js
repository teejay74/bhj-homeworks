"use strict";
const containerItems = document.getElementById('items');
const imgPreloader = document.getElementById('loader');
const requestURL = "https://netology-slow-rest.herokuapp.com";
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.responseType ='json';

const renderPage = (data) => {
	imgPreloader.classList.remove("loader_active")
	let curRates = data.response.Valute;
	for(let key in curRates) {
		let divItem = document.createElement('div');
		divItem.className = 'item';
		let divItemCode = document.createElement('div');
		divItemCode.className = 'item__code';
		divItemCode.textContent = curRates[key].CharCode;
		divItem.append(divItemCode);
		containerItems.append(divItem);
		
	}
}

xhr.addEventListener('load', () => {
	if(xhr.status == 200) {
		renderPage(xhr.response);
	}
})
xhr.send();
