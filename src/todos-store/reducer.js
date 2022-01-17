import { ADD_TODO, POPULATE_TODOS, UPDATE_TODO } from './types';

const DEFAULT_STATE = {
	items: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, items: [...state.items, action.todo] };

		case POPULATE_TODOS:
			return { ...state, items: action.todos };

		case UPDATE_TODO: {
			const itemsCopy = [...state.items];
			itemsCopy[action.index] = action.todo;
			return { ...state, items: itemsCopy };
		}

		default:
			return state;
	}
};

export default reducer;
