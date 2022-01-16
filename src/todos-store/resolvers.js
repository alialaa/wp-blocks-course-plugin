import { fetchTodos } from './controls';
import { populateTodos } from './actions';

export function* getTodos() {
	const todos = yield fetchTodos();
	return populateTodos(todos);
}
