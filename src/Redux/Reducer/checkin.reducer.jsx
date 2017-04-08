import { Map, List } from 'immutable';

// 新建签到详情信息
export const new_checkin = (state = Map({}), action) => {
	switch(action.type) {
		case 'new_checkin_name':
			return state.set('name', action.check_name);
		case 'new_checkin_end_time':
			return state.set('end_time', action.end_time);
		default:
			return state;
	}
}

// 签到列表
export const checkin_list = (state = List([]), action) => {
	console.log(action);
	switch(action.type) {
		case 'checkin_list':
			return List(action.list);
		case 'unshift_checkin':
			return state.unshift(action.item);
		default:
			return state;
	}
}