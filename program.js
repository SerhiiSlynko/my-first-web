

// let taskInput = document.getElementById('taskInput');
// let addTaskBtn = document.getElementById('addTaskBtn');
// let taskList = document.getElementById('taskList');

// addTaskBtn.onclick = function () {
// let task = taskInput.value;
// // Збереження у Local Storage
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// tasks.push(task);
// localStorage.setItem('tasks', JSON.stringify(tasks));}







let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');



addTaskBtn.onclick = function () {
let task = taskInput.value;

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));


addTaskToDOM(task);
taskInput.value = '';
};




function addTaskToDOM(task) {
let li = document.createElement('li');
li.innerHTML = task;
taskList.appendChild(li);
}



window.onload = function () {
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
for (let i = 0; i < tasks.length; i++) {
addTaskToDOM(tasks[i]);
}
};

