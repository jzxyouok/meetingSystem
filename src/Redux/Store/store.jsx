import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// 会议列表
import meeting_list_reducer from '../Reducer/meeting-list.reducer';

// 创建会议
import * as createMeetingReducer from '../Reducer/create-meeting.reducer';

// 报名表单
import * as registerFormReducer from '../Reducer/register-form.reducer';

// 会议基本信息
import * as meetingBaseInfoReducer from '../Reducer/meeting-base-info.reducer';

// 参会人员
import * as attendeeReducer from '../Reducer/attendee.reducer';

// 签到信息
import * as checkinReducer from '../Reducer/checkin.reducer';


const register_form_reducer = combineReducers(registerFormReducer);
const create_meeting_reduer = combineReducers(createMeetingReducer);
const base_info_reducer 	= combineReducers(meetingBaseInfoReducer);
const attendee_reducer 		= combineReducers(attendeeReducer);
const checkin_reducer 		= combineReducers(checkinReducer);

const reducers = combineReducers({
	meeting_list 	: meeting_list_reducer,
	create_meeting 	: create_meeting_reduer,
	register_form 	: register_form_reducer,
	base_info 		: base_info_reducer,
	attendee 		: attendee_reducer,
	checkin 		: checkin_reducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;