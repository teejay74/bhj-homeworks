"use strict";
const requestURL = "https://netology-slow-rest.herokuapp.com/poll.php";
const xhr = new XMLHttpRequest();
const questionDiv = document.getElementById("poll__title");
const answersDiv = document.getElementById("poll__answers");
xhr.open('GET', requestURL);
xhr.responseType ='json';


const renderPage = (page) => {
	questionDiv.textContent = page.data.title;
	for(let answer of page.data.answers) {
		let answerButton = document.createElement('BUTTON');
			answerButton.className = 'poll__anwer';
			answerButton.textContent = answer;
			answersDiv.append(answerButton);
			
				
	}


}

xhr.addEventListener('load', () => {
	if(xhr.status == 200) {
		
		renderPage(xhr.response);
	}
})

xhr.send();


