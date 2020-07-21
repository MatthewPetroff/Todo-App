function addTask() {
    const userInput = document.getElementById('user-input').value;

    if (userInput != '') {
    	//create <li>
	    const li = document.createElement('li');
	    li.id = userInput;

	    //create <div> and append to <li>
	    const div = document.createElement('div');
	    div.className = 'task';
	    li.appendChild(div);
	    
	    //create checkbox <input> and append to <div>
		const input = document.createElement('input');
	    input.type = 'checkbox';
	    input.setAttribute('onclick', `toggle('${userInput}')`);
	    div.appendChild(input);
	    
	    //create task text <h2> and append to <div>
	    const h2 = document.createElement('h2');
	    h2.innerHTML = userInput;
	    div.appendChild(h2);
		
		//create delete button <button> and append to <div>
	    const button = document.createElement('button');
	    button.class = 'delete';
	    button.setAttribute('onclick', `deleteTask('${userInput}')`);
	    button.innerHTML = '<strong>X</strong>';
	    button.className = 'delete';
	    div.appendChild(button);

	    //append <li> to <ul> and clear text form
	    document.getElementById('list').appendChild(li);
	    document.getElementById('user-input').value = '';
	}
}

function deleteTask(id) {
	const list = document.getElementById('list');
	const task = document.getElementById(id);
	list.removeChild(task);
}

function toggle(id) {
	const task = document.getElementById(id);
	const status = task.getElementsByTagName('div')[0].getElementsByTagName('input')[0].checked;

	if (status === true) {
		task.getElementsByTagName('div')[0].getElementsByTagName('h2')[0].style.textDecoration = 'line-through'; 
	} else {
		task.getElementsByTagName('div')[0].getElementsByTagName('h2')[0].style.textDecoration = 'none';
	}
}