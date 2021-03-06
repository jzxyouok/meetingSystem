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
	switch(action.type) {
		case 'checkin_list':
			return List(action.list);
		case 'unshift_checkin':
			return state.unshift(action.item);
		default:
			return state;
	}
}

// 需要删除的oid
export const del_oid = (state = List([]), action) => {
	switch(action.type) {
		case 'del_oid':
			return List(action.oid);
		default:
			return state;
	}
}

// 单次会议签到的详细信息
export const checkin_details = (state = List([]), action) => {
	switch(action.type) {
		case 'checkin_details':
			return List(action.info);
		default:
			return state;
	}
}

// 过滤之后的签到信息
export const filter_checkin_details = (state = List([]), action) => {
	switch(action.type) {
		case 'filter_checkin_details':
			return List(action.info);
		default:
			return state;
	}
}

// 本次签到总人数
export const total_num_title = (state = Map({num: 0, title: ''}), action) => {
	switch(action.type) {
		case 'total_num_title':
			return state.set('num', action.num)
						.set('title', action.title);
		default:
			return state;
	}
}

// 编辑签到人员
export const edit_person = (state = Map({}), action) => {
	switch(action.type) {
		case 'edit_person':
			return Map(action.person);
		case 'change_checkin_status':
			return state.update('status', x => x === '1' ? '0' : '1');
		default:
			return state;
	}
}