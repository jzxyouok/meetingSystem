import {fromJS} from 'immutable';

// 报名通道的初始状态
const inistalChannel = {
	existChannel: [],
	nowChannel: '',
	editChannel: {
		tid: 0,
		name: '',
	}
};
// 报名表单通道
export const register_channel = (state = fromJS(inistalChannel), action) => {
	switch(action.type) {
		case 'update_register_channel':
			return state.set('nowChannel', action.channelname);

		case 'add_register_channel':
			return state.set('existChannel', fromJS(action.channels));

		case 'update_edit_channel':
			return state
				.setIn(['editChannel', 'tid'], action.tid)
				.setIn(['editChannel', 'name'], action.channelname);

		default:
			return state;
	}
}

// 报名表单信息
export const register_form = (state = fromJS([]), action) => {
	switch(action.type) {
		default:
			return state;
	}
}

// 报名表单字段信息
export const register_field = (state = fromJS([]), action) => {
	switch(action.type) {
		default:
			return state;
	}
}