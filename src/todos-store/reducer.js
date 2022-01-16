import { ADD_TODO, POPULATE_TODOS } from './types';

const DEFAULT_STATE = {
	items: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, items: [...state.items, action.todo] };

		case POPULATE_TODOS:
			return { ...state, items: action.todos };

		default:
			return state;
	}
};

export default reducer;
