import { List } from 'immutable';
import { combineReducers } from 'redux-immutable';

const list = (state = List(), action) => {
	switch(action.type) {
		case 'update_meeting_list':
			return List(action.list);
		default:
			return state;
	}
}

export default combineReducers({
	list
});