const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
form.addEventListener('submit', addTask);
const taskList = document.querySelector("ul");
const clearBtn = document.querySelector("#clear-tasks")

taskList.addEventListener("click", removeTask);
taskList.addEventListener("click", clearTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);  
	list.appendChild(li);
	taskInput.value = '';
	e.preventDefault();
}

function removeTask(e){
	console.log("awdad")
	if(e.target.textContent == "X"){
		if(confirm("Kas tahad kustutda?")) {
			e.target.parentElement.remove();
		}
	}
}

function clearTask(e){
		console.log("adadakn");
		if(confirm("Kas tahad kustutda?")) {
			var myobj = document.getElementById("alltasks");
			myobj.remove();
		}
}


