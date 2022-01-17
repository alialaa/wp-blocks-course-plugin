import { FETCH_TODOS, CREATE_TODO } from './types';

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	};
};

export const createTodo = (title) => {
	return {
		type: CREATE_TODO,
		title,
	};
};

export default {
	FETCH_TODOS() {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not fetch todos');
			});
	},
	CREATE_TODO({ title }) {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				body: JSON.stringify({
					title,
					completed: false,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not create todo.');
			});
	},
};
