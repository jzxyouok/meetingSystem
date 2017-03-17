import {fromJS} from 'immutable';
const initialState = fromJS({'createAct': {}});
const act_name = (state = initialState, action) => {
	switch(action.type) {
		case 'act_name':
			return state.setIn(['createAct', 'name'], action.value);
		default:
			return state;
	}
}

const register_begin_time = (state = initialState, action) => {
	switch(action.type) {
		case 'register_begin_time':
			return state.setIn(['createAct', 'time'], action.value);
		default:
			return state;
	}
}

const register_end_time = (state = initialState, action) => {
	switch(action.type) {
		case 'register_end_time':
			return state.setIn(['createAct', 'time'], action.value);
		default:
			return state;
	}
}

const act_begin_time = (state = initialState, action) => {
	switch(action.type) {
		case 'act_begin_time':
			return state.setIn(['createAct', 'begin_time'], action.value);
		default:
			return state;
	}
}

const act_end_time = (state = initialState, action) => {
	switch(action.type) {
		case 'act_end_time':
			return state.setIn(['createAct', 'end_time'], action.value);
		default:
			return state;
	}
}

const act_province = (state = initialState, action) => {
	switch(action.type) {
		case 'act_province':
			return state.setIn(['createAct', 'province'], action.value);
		default:
			return state;
	}
}

const act_city = (state = initialState, action) => {
	switch(action.type) {
		case 'act_city':
			return state.setIn(['createAct', 'city'], action.value);
		default:
			return state;
	}
}

const act_detail_address = (state = initialState, action) => {
	switch(action.type) {
		case 'act_detail_address':
			return state.setIn(['createAct', 'detail_address'], action.value);
		default:
			return state;
	}
}

const show_add_offical_modal = (state = initialState, action) => {
	switch(action.type) {
		case 'show_add_offical_modal':
			return state.updateIn(['createAct', 'isShow'], value => !value);
		default:
			return state;
	}
}

const act_official = (state = initialState, action) => {
	switch(action.type) {
		case 'act_official':
			console.log(action);
			return state.setIn(['createAct', 'official'], action.value);
		default:
			return state;
	}
}

const add_act_official = (state = initialState, action) => {
	switch(action.type) {
		case 'add_act_official':
			return state.updateIn(['createAct', 'now_officials'], value => value.push(action.value));
		default:
			return state;
	}
}

const act_category = (state = initialState, action) => {
	switch(action.type) {
		case 'act_category':
			return state.setIn(['createAct', 'category'], action.value);
		default:
			return state;
	}
}

const add_act_category = (state = initialState, action) => {
	switch(action.type) {
		case 'add_act_category':
			return state.updateIn(['createAct', 'now_categorys'], value => value.push(action.value));
		default:
			return state;
	}
}

const show_add_category_modal = (state = initialState, action) => {
	switch(action.type) {
		case 'show_add_category_modal':
			return state.updateIn(['createAct', 'isShow'], value => !value);
		default:
			return state;
	}
}

const act_poster = (state = initialState, action) => {
	switch(action.type) {
		case 'act_poster':
			return state.setIn(['createAct', 'poster'], action.value);
		default:
			return state;
	}
}

const act_details = (state = initialState, action) => {
	switch(action.type) {
		case 'act_details':
			return state.setIn(['createAct', 'act_details'], action.value);
		default:
			return state;
	}
}

export default {
	act_name,
	register_begin_time,
	register_end_time,
	act_begin_time,
	act_end_time,
	act_province,
	act_city,
	act_detail_address,
	act_official,
	show_add_offical_modal,
	add_act_official,
	act_category,
	add_act_category,
	show_add_category_modal,
	act_poster,
	act_details
}