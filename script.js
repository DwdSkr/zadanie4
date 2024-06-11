const parent = document.getElementById(`list`);
function test() {
	const newTask = document.getElementById(`newTask`).value;
	if (newTask !== ``) {
		const newLi = document.createElement(`li`);
		//
		const btnEdit = document.createElement(`button`);
		btnEdit.textContent = `edytuj`;
		btnEdit.setAttribute(`onclick`, `editFunction()`);
		//
		const btnDelete = document.createElement(`button`);
		btnDelete.textContent = `usuń`;
		btnDelete.setAttribute(`onclick`, `deleteFunction()`);
		//
		newLi.innerText = newTask;
		parent.appendChild(newLi);
		const liManagement = document.querySelectorAll(`#list li`);
		liManagement[liManagement.length - 1].appendChild(btnEdit);
		liManagement[liManagement.length - 1].appendChild(btnDelete);
		//
		document.getElementById(`newTask`).value = ``;
	} else {
		alert(`Nazwa zadania nie może być pusta.`);
	}
}

function deleteFunction() {
	const deleteItem = document.querySelector(`li`);
	parent.removeChild(deleteItem);
}
function editFunction() {
	const changeTaskInput = document.createElement(`input`);
	changeTaskInput.type = `text`;
	changeTaskInput.id = `changeTask`;
	//
	const changeTaskButton = document.createElement(`button`);
	changeTaskButton.setAttribute(`onclick`, `changeTask()`);
	changeTaskButton.innerText = `Zatwierdź zmiany`;
	//
	const removeEdit = document.querySelector(`#list li button`);
	removeEdit.parentNode.removeChild(removeEdit);
	//
	const editPlace = document.querySelector(`#list li`);
	//

	editPlace.insertBefore(
		changeTaskInput,
		document.querySelector(`#list li button`)
	);
	editPlace.insertBefore(
		changeTaskButton,
		document.querySelector(`#list li button`)
	);
	//
}
function changeTask() {
	// const changeTaskValue = document.getElementById(`changeTask`).value;
	// if (changeTaskValue !== ``) {
	// } else {
	// 	alert(`Nazwa zadania nie może być pusta.`);
	// }
}
