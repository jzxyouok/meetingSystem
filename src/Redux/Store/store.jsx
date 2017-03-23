import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import meeting_list_reducer from '../Reducer/meeting-list.reducer';

const reducers = combineReducers({
	meeting_list: meeting_list_reducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;