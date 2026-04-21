console.log('script loaded');
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskList = document.getElementById('taskList');
const completeList = document.getElementById('completedList');

addBtn.addEventListener ('click', function() {
 const taskText = taskInput.value;
 
 if (taskText === '') {
   alert( 'please enter a task!');
   return;
 }
const li = document.createElement('li');
 li.textContent = taskText;
 taskList.appendChild(li);
 taskInput.value = '';
});