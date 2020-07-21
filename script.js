function addTask() {
    const userInput = document.getElementById('user-input').value;

    //create list item
    const line = document.createElement('li');
    line.id = userInput;

    const task = document.createElement('div');
    task.className = 'task';
    line.appendChild(task);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = "toggle(userInput)";
    task.appendChild(checkbox);

    const text = document.createElement('h2');
    text.innerHTML = userInput;
    task.appendChild(text);

    const deleteBtn = document.createElement('button');
    deleteBtn.class = 'delete';
    deleteBtn.onclick = "deleteTask(userInput)";
    deleteBtn.innerHTML = 'x';
    deleteBtn.className = 'delete';
    task.appendChild(deleteBtn);

    document.getElementById('list').appendChild(line);
}

function deleteTask(id) {
	const list = document.getElementById('list');
    const task = document.getElementById(id)
    document.list.removeChild(task);
}

function toggle(id) {
	let status = document.getElementById(id).checked;
	if (status === true) {
		console.log("checked");
	} else {
		console.log("unchecked");
	}
}
