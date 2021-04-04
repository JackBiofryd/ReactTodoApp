import { getTodos, getCounts } from '../helpers/localStorage';

const initialState = {
	todos: getTodos(),
	currentTodo: null,
	counts: getCounts(),
	filters: {
		showCompleted: true,
		showLeft: true
	}
};

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
		case 'todos/addTodo':
			return {
				...state,
				todos: [...state.todos, action.payload],
				counts: {
					...state.counts,
					all: state.counts.all + 1,
					left: state.counts.left + 1
				}
			};
		case 'todos/toggleCompleted':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id !== action.payload.id
						? todo
						: { ...todo, completed: !todo.completed }
				),
				counts: {
					...state.counts,
					left: action.payload.leftCount,
					completed: action.payload.completedCount
				}
			};
		case 'todos/deleteTodo':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
				counts: {
					...state.counts,
					all: state.counts.all - 1,
					completed: state.todos.reduce(
						(total, todo) =>
							todo.completed && todo.id !== action.payload
								? total + 1
								: total,
						0
					),
					left: state.todos.reduce(
						(total, todo) =>
							!todo.completed && todo.id !== action.payload
								? total + 1
								: total,
						0
					)
				}
			};
		case 'todos/setCurrentTodo':
			return {
				...state,
				currentTodo: action.payload
			};
		case 'todos/editTodo':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id !== action.payload.id ? todo : action.payload
				),
				currentTodo: null
			};
		case 'todos/clearAll':
			return {
				...state,
				todos: [],
				counts: {
					...state.counts,
					all: 0,
					completed: 0,
					left: 0
				}
			};
		case 'todos/completeAll':
			return {
				...state,
				todos: state.todos.map(todo => ({ ...todo, completed: true })),
				counts: {
					...state.counts,
					completed: state.counts.all,
					left: 0
				}
			};
		case 'todos/toggleShowCompleted':
			return {
				...state,
				filters: {
					...state.filters,
					showCompleted: !state.filters.showCompleted
				}
			};
		case 'todos/toggleShowLeft':
			return {
				...state,
				filters: {
					...state.filters,
					showLeft: !state.filters.showLeft
				}
			};
		default:
			return state;
	}
}
