document.getElementById("add").addEventListener("click", function(e) {
	const userInput = document.getElementById('user-input').value;

    if (userInput === '') {return};

    const li = document.createElement('li');
    li.id = userInput;

    const div = document.createElement('div');
    div.className = 'task';
    li.appendChild(div);
	    
	const input = document.createElement('input');
    input.type = 'checkbox';

    input.addEventListener('click', function(e) {
		if (e.target.checked === true) {
			e.target.nextElementSibling.style.textDecoration = 'line-through'; 
		} else {
			e.target.nextElementSibling.style.textDecoration = 'none';
		}
    });
    div.appendChild(input);
	    
    const h2 = document.createElement('h2');
    h2.innerHTML = userInput;
    div.appendChild(h2);
		
    const button = document.createElement('button');
    button.class = 'delete';
    button.innerHTML = '<strong>X</strong>';
    button.className = 'delete';

    button.addEventListener('click', function(e) {
    	const list = document.getElementById('list');
		list.removeChild(e.target.parentElement.parentElement.parentElement);
    });
    div.appendChild(button);

    document.getElementById('list').appendChild(li);
	document.getElementById('user-input').value = '';
});