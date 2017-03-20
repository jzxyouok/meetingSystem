import { fromJS } from 'immutable';
// 改变人员类型
const attendee_type = (state = 'all', action) => {
	switch(action.type) {
		case 'c_at_type':
			return action.value;
		default:
			return state;
	}
}

export default {
	attendee_type
}