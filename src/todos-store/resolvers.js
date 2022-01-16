import { dispatch } from '@wordpress/data';
import { fetchTodos } from './controls';
import { populateTodos } from './actions';

export function* getTodos() {
	try {
		const todos = yield fetchTodos();
		return populateTodos(todos);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not fetch todos.'
		);
	}
}
