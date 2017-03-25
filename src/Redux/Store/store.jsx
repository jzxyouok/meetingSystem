import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// 会议列表
import meeting_list_reducer from '../Reducer/meeting-list.reducer';

// 创建会议
import * as createMeetingReducer from '../Reducer/create-meeting.reducer';
const create_meeting_reduer = combineReducers(createMeetingReducer);

// 报名表单
import * as registerFormReducer from '../Reducer/register-form.reducer';
const register_form_reducer = combineReducers(registerFormReducer);

const reducers = combineReducers({
	meeting_list: meeting_list_reducer,
	create_meeting: create_meeting_reduer,
	register_form: register_form_reducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;