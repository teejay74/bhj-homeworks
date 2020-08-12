"use strict";
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const btnAdd = document.getElementById("tasks__add");
let taskNumber;

const taskAdd = (task) => {
	const divTask = document.createElement('div');
	const divTitle = document.createElement('div');
	const aRemove = document.createElement('a');
	divTask.className = "task";
	divTitle.className = "task__title";
	aRemove.className = "task__remove";
	aRemove.insertAdjacentHTML("afterBegin", "&times;");
	divTitle.insertAdjacentText("afterBegin", task);
	divTask.append(divTitle);
	divTask.append(aRemove);
	taskList.append(divTask);
	
	taskInput.value = '';
	aRemove.addEventListener("click", () => {
	localStorage.removeItem(divTask.getAttribute('task'));
	divTask.remove();

	})
	
}

//События 
btnAdd.addEventListener('click', (e) => {
 	e.preventDefault();
 		if (taskInput.value.length > 0) {
 			taskNumber++;
	 		taskAdd(taskInput.value);
	 		
 		}
	}
)

document.addEventListener('keydown', (e) => {
	if (taskInput.value.length > 0 && e.keyCode == '13') {
		taskNumber++;
	 		taskAdd(taskInput.value);
	}
})




