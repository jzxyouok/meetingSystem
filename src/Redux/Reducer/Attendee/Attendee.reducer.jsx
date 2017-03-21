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

const table_person = (state = fromJS({head: [], body: [], now_page: 0, total_page: 0}), action) => {
	switch(action.type) {
		case 'change_person':
			return state.merge(fromJS(action.value));
		default:
			return state;
	}
}

const search_condition = (state = fromJS({page: 1, words: '222', search_type: '', begin_date: '', end_date: '', attendee_type: 'all'}), action) => {
	switch(action.type) {
		case 'change_search':
			return state.merge(fromJS(action.config));
		default:
			return state;
	}
}

export default {
	attendee_type,
	table_person,
	search_condition
}