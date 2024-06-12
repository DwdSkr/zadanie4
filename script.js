const parent = document.getElementById(`list`);
function test() {
	const newTask = document.getElementById(`newTask`).value;
	if (newTask !== ``) {
		const newLi = document.createElement(`li`);
		newLi.innerText = newTask;
		//
		const btnEdit = document.createElement(`button`);
		const btnDelete = document.createElement(`button`);
		let taskContainer = newTask;
		//
		btnEdit.textContent = `edytuj`;
		btnDelete.textContent = `usuń`;
		//
		btnEdit.addEventListener(`click`, () => {
			newLi.textContent = ``;
			//
			const changeTaskInput = document.createElement(`input`);
			changeTaskInput.type = `text`;
			changeTaskInput.id = `changeTask`;
			changeTaskInput.value = taskContainer;
			newLi.appendChild(changeTaskInput);
			//
			const changeTaskButton = document.createElement(`button`);
			changeTaskButton.innerText = `Zatwierdź zmiany`;
			changeTaskButton.addEventListener('click', () => {
				const changedTask = document.getElementById(`changeTask`).value;
				if (changedTask !== '') {
					taskContainer = changedTask;
					newLi.textContent = changedTask;
					newLi.appendChild(btnEdit);
					newLi.appendChild(btnDelete);
				} else {
					alert(`Nazwa zadania nie może być pusta.`);
				}
			});
			newLi.appendChild(changeTaskButton);
			newLi.appendChild(btnDelete);
		});
		//
		btnDelete.addEventListener(`click`, () => {
			newLi.parentNode.removeChild(newLi);
		});
		//

		parent.appendChild(newLi);
		newLi.appendChild(btnEdit);
		newLi.appendChild(btnDelete);
		//
		document.getElementById(`newTask`).value = ``;
	} else {
		alert(`Nazwa zadania nie może być pusta.`);
	}
}
