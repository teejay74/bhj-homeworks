"use strict";
const chat = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input")
const chatContainer = document.querySelector(".chat-widget__messages-container");
let i = 0; 
let timerId;
const botMessages = ['yo', 'чё надо?', 'Я устал, я ухожу', 'Денег нет, но вы держитесь', 'Зачем вы пишите, я сплю']                    
const openChat = (e) => {
	e.currentTarget.classList.add("chat-widget_active");
	timerId = setTimeout(sendMessageBot, 30000);
	
}	

const sendMessageBot = () => {
	let time = new Date();
	let currentTime = time.getHours() + ":" + time.getMinutes();
	let messageContainerBot =  `<div class="message">
	<div class="message__time">${currentTime}</div><div class="message__text">${botMessages[Math.floor(Math.random()*botMessages.length)]}</div></div>`
	chatContainer.innerHTML += messageContainerBot;
}

const sendMessage = (e) => {
	
	let time = new Date();
	let currentTime = time.getHours() + ":" + time.getMinutes();
	let message = chatInput.value;
	let messageContainer =  `<div class="message message_client">
	<div class="message__time"></div><div class="message__text"></div></div>`
		
	if(e.keyCode === 13 & message.length > 0 ) {
		clearTimeout(timerId);
		timerId = setTimeout(sendMessageBot,30000)
		chatContainer.innerHTML += messageContainer;
		
		sendMessageBot(currentTime);
		let messageClient = Array.from(document.getElementsByClassName("message_client"));
		let messageText = messageClient[i].querySelector(".message__text");
		let messageTime = messageClient[i].querySelector(".message__time");
		messageText.textContent = message;
		messageTime.textContent = currentTime;
		chatInput.value = '';
		messageClient[i].scrollIntoView(top);
		i++;

	}
}

chat.addEventListener("click", openChat);
chatInput.addEventListener("keydown", sendMessage)
