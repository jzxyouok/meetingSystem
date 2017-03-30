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

const initial_form_state = {
	address:",,",
	category:"",
	detail_address:"",
	details:"",
	id:"",
	image:"",
	meeting_time:" ~ ",
	official:"",
	reg_time:" ~ ",
	title:"",
};
export const form_initial = (state = initial_form_state, action) => {
	switch(action.type) {
		case 'init_form':
			return Object.assign({}, state, action.form_state);
		default:
			return state;
	}
}

export const state = (state = 0, action) => {
	switch(action.type) {
		case 'update_state':
			return action.state;
		default:
			return state;
	}
}
