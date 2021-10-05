const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('x'));
	link.setAttribute('href', '#');
	li.appendChild(link);
	list.appendChild(li);
	taskInput.value = '';
	e.preventDefault();
}