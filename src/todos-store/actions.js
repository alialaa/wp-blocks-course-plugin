import { dispatch } from '@wordpress/data';
import { ADD_TODO, POPULATE_TODOS } from './types';
import { createTodo } from './controls';

export function* addTodo(title) {
	try {
		const todo = yield createTodo(title);
		return {
			type: ADD_TODO,
			todo,
		};
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not create todo.'
		);
	}
}

export const populateTodos = (todos) => {
	return {
		type: POPULATE_TODOS,
		todos,
	};
};
