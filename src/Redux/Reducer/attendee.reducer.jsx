import { fromJS } from 'immutable';

export const at_type = (state = 'all', action) => {
	switch(action.type) {
		case 'at_type':
			return action.at_type;
		default:
			return state;
	}
}

const init_condition = {
	words: '',
	category: ''
}
export const condition = (state = fromJS(init_condition), action) => {
	switch(action.type) {
		case 'search_words':
			return state.set('words', action.words);
		case 'search_category':
			return state.set('category', action.category);
		default:
			return state;
	}
}