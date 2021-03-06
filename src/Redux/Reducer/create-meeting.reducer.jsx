export const title = (state = '', action) => {
	switch(action.type) {
		case 'update_title':
			return action.title;
		default:
			return state;
	}
}

export const reg_time = (state = '', action) => {
	switch(action.type) {
		case 'update_reg_time':
			return action.reg_time;
		default:
			return state;
	}
}

export const meeting_time = (state = '', action) => {
	switch(action.type) {
		case 'update_meeting_time':
			return action.meeting_time;
		default:
			return state;
	}
}

export const address = (state = '', action) => {
	switch(action.type) {
		case 'update_address':
			return action.address;
		default:
			return state;
	}
}

export const detail_address = (state = '', action) => {
	switch(action.type) {
		case 'update_detail_address':
			return action.detail_address;
		default:
			return state;
	}
}

export const official = (state = '', action) => {
	switch(action.type) {
		case 'update_official':
			return action.official;
		default:
			return state;
	}
}

export const category = (state = '', action) => {
	switch(action.type) {
		case 'update_type':
			return action.act_type;
		default:
			return state;
	}
}

export const image = (state = '', action) => {
	switch(action.type) {
		case 'update_poster':
			return action.poster;
		default:
			return state;
	}
}

export const details = (state = '', action) => {
	switch(action.type) {
		case 'update_details':
			return action.details;
		default:
			return state;
	}
}