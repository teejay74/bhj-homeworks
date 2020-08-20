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
	containerItems.innerHTML = '';

	for(let key in curRates) {
		let divItemCurrency = document.createElement('div');
		let divItemValue = document.createElement('div');
		let divItemCode = document.createElement('div');
		let divItem = document.createElement('div');
		divItem.className = 'item';
		divItemCode.className = 'item__code';
		divItemCode.textContent = curRates[key].CharCode;
		divItemValue.className = 'item__value';
		divItemValue.textContent = curRates[key].Value;
		divItemCurrency.className = 'item__currency';
		divItemCurrency.textContent = 'руб.';
		divItem.append(divItemCode);
		divItem.append(divItemValue);
		divItem.append(divItemCurrency);
		containerItems.append(divItem);
	}
}

xhr.addEventListener('load', () => {
	if(xhr.status == 200) {
	localStorage.preloader = JSON.stringify(xhr.response);
	renderPage(xhr.response);
	}
})


if(localStorage.preloader) {
	const pagePreload = JSON.parse(localStorage.preloader)
	renderPage(pagePreload);
}

xhr.send();
