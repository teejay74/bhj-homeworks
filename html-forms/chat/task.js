"use strict";
const chat = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input")
const chatContainer = document.querySelector(".chat-widget__messages-container")
let i = 0; 
const botMessages = ['yo', 'чё надо?', 'Я устал, я ухожу', 'Денег нет, но вы держитесь', 'Зачем вы пишите, я сплю']                    






const openChat = (e) => {
	e.currentTarget.classList.add("chat-widget_active");
}	

const sendMessage = (e) => {
	let time = new Date();
	let currentTime = time.getHours() + ":" + time.getMinutes();
	let message = chatInput.value;
	let messageContainer =  `<div class="message message_client">
	<div class="message__time">22:10</div><div class="message__text"></div></div>`
	let messageContainerBot =  `<div class="message">
	<div class="message__time">${currentTime}</div><div class="message__text">${botMessages[Math.floor(Math.random()*botMessages.length)]}</div></div>`
	
	if(e.keyCode === 13 & message.length > 0 ) {
		chatContainer.innerHTML += messageContainer;
		chatContainer.innerHTML += messageContainerBot;
		let messageClient = Array.from(document.getElementsByClassName("message_client"));
		let messageText = messageClient[i].querySelector(".message__text");
		let messageTime = messageClient[i].querySelector(".message__time");
		messageText.textContent = message;
		messageTime.textContent = currentTime;
		chatInput.value = '';
		console.log(messageText);
		i++;

	}
}

chat.addEventListener("click", openChat);
chatInput.addEventListener("keydown", sendMessage)