import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import meeting_list_reducer from '../Reducer/meeting-list.reducer';

import * as createMeetingReducer from '../Reducer/create-meeting.reducer';
const create_meeting_reduer = combineReducers(createMeetingReducer);



const reducers = combineReducers({
	meeting_list: meeting_list_reducer,
	create_meeting: create_meeting_reduer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;