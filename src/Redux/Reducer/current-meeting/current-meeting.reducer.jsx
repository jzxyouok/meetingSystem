const current_meeting_list = (state = [], action) => {
	switch(action.type) {
		case 'meeting_list':
			console.log(action);
			return [...state, ...action.list];
		default:
			return state;
	}
}

export default {
	current_meeting_list
}