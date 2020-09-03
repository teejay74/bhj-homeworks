"use strict";
const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');

signin.classList.add('signin_active');
signinBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const formData = new FormData(signinForm);
	const requestURL = "https://netology-slow-rest.herokuapp.com/auth.php";
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURL);
	xhr.responseType = 'json';
	xhr.onload = () => {
		if(xhr.response.success) {
			localStorage.setItem('user', xhr.response.user_id);
			welcome.classList.add('welcome_active');
    		signin.classList.remove('signin_active');
    		id.innerText = xhr.response.user_id;
		}
		else {
			 alert('Неверный логин/пароль');
		}
	}
	xhr.send(formData);
});

if(localStorage.user) {
	welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
    id.innerText = localStorage.user;
}


