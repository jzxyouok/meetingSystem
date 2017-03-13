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

const act_province = (state = fromJS({province: ''}), action) => {
	switch(action.type) {
		case 'act_province':
			return state.set('province', action.value);
		default:
			return state;
	}
}

const act_city = (state = fromJS({city: ''}), action) => {
	switch(action.type) {
		case 'act_city':
			return state.set('city', action.value);
		default:
			return state;
	}
}

const act_detail_address = (state = fromJS({detail_address: ''}), action) => {
	switch(action.type) {
		case 'act_detail_address':
			return state.set('detail_address', action.value);
		default:
			return state;
	}
}

const show_add_offical_modal = (state = fromJS({isShow: false}), action) => {
	switch(action.type) {
		case 'show_add_offical_modal':
			return state.update('isShow', value => !value);
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

const show_add_category_modal = (state = fromJS({isShow: false}), action) => {
	switch(action.type) {
		case 'show_add_category_modal':
			return state.update('isShow', value => !value);
		default:
			return state;
	}
}

const act_poster = (state = fromJS({poster: './src/Resource/images/upload.jpg'}), action) => {
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