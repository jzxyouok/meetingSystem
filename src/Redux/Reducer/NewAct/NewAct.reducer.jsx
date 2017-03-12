import {fromJS} from 'immutable';
const act_name = (state = fromJS({name: ''}), action) => {
	switch(action.type) {
		case 'act_name':
			return state.set('name', action.value);
		default:
			return state;
	}
}

const act_begin_time = (state = fromJS({begin_time: ''}), action) => {
	switch(action.type) {
		case 'act_begin_time':
			return state.set('begin_time', action.value);
		default:
			return state;
	}
}

const act_end_time = (state = fromJS({end_time: ''}), action) => {
	switch(action.type) {
		case 'act_end_time':
			return state.set('end_time', action.value);
		default:
			return state;
	}
}

const act_address = (state = fromJS({province: '', city: '', detail: ''}), action) => {
	switch(action.type) {
		case 'act_address':
			return state.set('province', action.province)
						.set('city', action.city)
						.set('detail', action.detail);
		default:
			return state;
	}
}

const act_official = (state = fromJS({official: ''}), action) => {
	switch(action.type) {
		case 'act_official':
			return state.set('official', action.value);
		default:
			return state;
	}
}

const add_act_official = (state = fromJS({now_officials: []}), action) => {
	switch(action.type) {
		case 'add_act_official':
			return state.update('now_officials', value => value.push(action.value));
		default:
			return state;
	}
}

const act_category = (state = fromJS({category: ''}), action) => {
	switch(action.type) {
		case 'act_category':
			return state.set('category', action.value);
		default:
			return state;
	}
}

const add_act_category = (state = fromJS({now_categorys: []}), action) => {
	switch(action.type) {
		case 'add_act_category':
			return state.update('now_categorys', value => value.push(action.value));
		default:
			return state;
	}
}

const act_poster = (state = fromJS({poster: ''}), action) => {
	switch(action.type) {
		case 'act_poster':
			return state.set('poster', action.value);
		default:
			return state;
	}
}

const act_details = (state = fromJS({act_details: ''}), action) => {
	switch(action.type) {
		case 'act_details':
			return state.set('act_details', action.value);
		default:
			return state;
	}
}

export default {
	act_name,
	act_begin_time,
	act_end_time,
	act_address,
	act_official,
	add_act_official,
	act_category,
	add_act_category,
	act_poster,
	act_details
}