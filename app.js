const taskList = document.querySelector('ul');
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const autorInput = document.querySelector('#autor');
const isbnInput = document.querySelector('#isbn');
const clearBtn = document.querySelector('#clear-tasks');

// page reloading event - lehe taaskäivitamine
document.addEventListener('DOMContentLoaded', getTasksFromLS);

const filterInput = document.querySelector(`#filter`)


// click elemendi kustutamiseks
taskList.addEventListener('click', deleteTask);



// form submit event
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	li.appendChild(document.createTextNode(autorInput.value));
	li.appendChild(document.createTextNode(isbnInput.value));
	
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);

	taskList.appendChild(li);

	storeTaskInLocalStorage(taskInput.value);

	taskInput.value = '';

	e.preventDefault();
}

function deleteTask(e){
	console.log(e.target.parentElement);
	if(e.target.textContent == "X"){
		if(confirm('Do you want to delete this task?')) {
			e.target.parentElement.remove();
		}
	}
}

function deleteTasks(e){
	if(confirm("Kas soovid kustutada kõik taskid?")){
		while(taskList.firstChild){
			taskList.removeChild(taskList.firstChild);
		}
		localStorage.clear();
	}
}

function storeTaskInLocalStorage(task=null) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  /*
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = '';
  } else {
    tasks = localStorage.getItem('tasks');
  }
  tasks = taskList.innerHTML;
  localStorage.setItem('tasks', tasks);
  */
}

function removeTaskFromLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(task);
  tasks.forEach(function(element, index){
  	console.log(element);
  	if(element == task.slice(0, -1)){
  		tasks.splice(index, 1);
  	}
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getTasksFromLS(e) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(taskselement){
  	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskselement));
	
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);

	taskList.appendChild(li);
  });
}



function filterTasks(e){
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll(`li`);
	tasks.forEach(function(li){
		const task = li.firstChild.textContent.toLowerCase();
		if(task.indexOf(text != -1)){
			li.style.display = `block`;
		}else {
			li.style.display = `none`;
		}
	});
}

