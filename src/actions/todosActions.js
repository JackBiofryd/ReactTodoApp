import {
	addTodoStorage,
	clearAllStorage,
	toggleCompletedStorage,
	completeAllStorage,
	deleteTodoStorage
} from '../helpers/localStorage';

export const addTodo = todo => {
	if (todo.text.length > 50) todo.text = todo.text.slice(0, 50) + '...';

	addTodoStorage(todo);

	return {
		type: 'todos/addTodo',
		payload: todo
	};
};

export const toggleCompleted = id => {
	const { completedCount, leftCount } = toggleCompletedStorage(id);

	return {
		type: 'todos/toggleCompleted',
		payload: {
			id,
			completedCount,
			leftCount
		}
	};
};

export const deleteTodo = id => {
	deleteTodoStorage(id);

	return {
		type: 'todos/deleteTodo',
		payload: id
	};
};

export const setCurrentTodo = todo => ({
	type: 'todos/setCurrentTodo',
	payload: todo
});

export const editTodo = todo => ({
	type: 'todos/editTodo',
	payload: todo
});

export const clearAll = () => {
	clearAllStorage();

	return {
		type: 'todos/clearAll'
	};
};

export const completeAll = () => {
	completeAllStorage();

	return {
		type: 'todos/completeAll'
	};
};

export const toggleShowCompleted = () => ({
	type: 'todos/toggleShowCompleted'
});

export const toggleShowLeft = () => ({
	type: 'todos/toggleShowLeft'
});
