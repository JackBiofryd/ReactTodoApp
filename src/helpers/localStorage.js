export function getTodos() {
	if (localStorage.getItem('todos')) {
		return JSON.parse(localStorage.getItem('todos'));
	} else {
		const initialTodo = [
			{
				id: '1',
				text: 'This is an example todo! Have Fun',
				completed: false
			}
		];

		localStorage.setItem('todos', JSON.stringify(initialTodo));

		return initialTodo;
	}
}

export function getCounts() {
	if (localStorage.getItem('counts')) {
		return JSON.parse(localStorage.getItem('counts'));
	} else {
		const initialCounts = {
			all: 1,
			completed: 0,
			left: 1
		};

		localStorage.setItem('counts', JSON.stringify(initialCounts));

		return initialCounts;
	}
}

export function addTodoStorage(todo) {
	const todos = JSON.parse(localStorage.getItem('todos'));
	const counts = JSON.parse(localStorage.getItem('counts'));

	// Add todo to list of todos and set back to localStorage
	localStorage.setItem('todos', JSON.stringify([...todos, todo]));
	localStorage.setItem(
		'counts',
		JSON.stringify({
			...counts,
			all: counts.all + 1
		})
	);
}

export function toggleCompletedStorage(id) {
	let todos = JSON.parse(localStorage.getItem('todos'));
	const counts = JSON.parse(localStorage.getItem('counts'));

	// Toggle completed in specific todo and set it back to localStorage
	todos = todos.map(todo =>
		todo.id !== id ? todo : { ...todo, completed: !todo.completed }
	);
	localStorage.setItem('todos', JSON.stringify(todos));

	// Calculate completed count and left count and set in localStorage
	const completedCount = todos.reduce(
		(total, todo) => (todo.completed ? total + 1 : total),
		0
	);
	const leftCount = todos.reduce(
		(total, todo) => (!todo.completed ? total + 1 : total),
		0
	);

	localStorage.setItem(
		'counts',
		JSON.stringify({
			...counts,
			left: leftCount,
			completed: completedCount
		})
	);

	return {
		completedCount,
		leftCount
	};
}

export function deleteTodoStorage(id) {
	const todos = JSON.parse(localStorage.getItem('todos'));
	const counts = JSON.parse(localStorage.getItem('counts'));

	// Delete todo from list of todos and set it back to localStorage
	localStorage.setItem(
		'todos',
		JSON.stringify(todos.filter(todo => todo.id !== id))
	);

	localStorage.setItem(
		'counts',
		JSON.stringify({
			...counts,
			all: counts.all - 1,
			completed: todos.reduce(
				(total, todo) =>
					todo.completed && todo.id !== id ? total + 1 : total,
				0
			),
			left: todos.reduce(
				(total, todo) =>
					!todo.completed && todo.id !== id ? total + 1 : total,
				0
			)
		})
	);
}

export function clearAllStorage() {
	localStorage.setItem('todos', JSON.stringify([]));
	localStorage.setItem(
		'counts',
		JSON.stringify({
			all: 0,
			completed: 0,
			left: 0
		})
	);
}

export function completeAllStorage() {
	const todos = JSON.parse(localStorage.getItem('todos'));
	const counts = JSON.parse(localStorage.getItem('counts'));

	localStorage.setItem(
		'todos',
		JSON.stringify(todos.map(todo => ({ ...todo, completed: true })))
	);
	localStorage.setItem(
		'counts',
		JSON.stringify({
			...counts,
			completed: counts.all,
			left: 0
		})
	);
}
