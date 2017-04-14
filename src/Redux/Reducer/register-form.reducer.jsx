import { fromJS, Map } from 'immutable';

// 处理自定义部分的表单内容
export const customize = (state = fromJS([]), action) => {
	let opt_len = state.size;
	const { index, title, name, options, option_type } = action;
	switch(action.type) {
		case 'add_single_choice':
		case 'add_muti_choice':
		case 'add_select':
			return state.push(Map({ 
				index: opt_len, 
				title, 
				name, 
				options, 
				option_type 
			}));
		
		case 'add_date':
		case 'add_file':
		case 'add_text':
		case 'add_textarea':
			return state.push(Map({
				index: opt_len, 
				title, 
				name, 
				option_type 
			}));

		case 'update_title':
			return state.setIn([action.index, 'title'], action.title);
		
		case 'update_options':
			return state.setIn([action.index, 'options'], action.options);

		case 'delete_option':
			return state
				.delete(index)
				.map((item, index) => item.set('index', index));

		case 'move_up_option':
			// 先修改key值
			let last_option = state.updateIn([index - 1, 'index'], x => x + 1).get(index-1),
				now_option  = state.updateIn([index, 'index'], x => x - 1).get(index);
			// 重排顺序
			return state
				.set(index-1, now_option)
				.set(index, last_option);

		case 'move_down_option':
			// 先修改key值
			let now_option_down  = state.updateIn([index, 'index'], x => x + 1).get(index),
				next_option 	 = state.updateIn([index+1, 'index'], x => x - 1).get(index+1);
			// 重排顺序
			return state
				.set(index, next_option)
				.set(index + 1 , now_option_down);
		
		default:
			return state;
	}
}

// 表单常用选项
export const custom = (state=[], action) => {
	switch(action.type) {
		case 'update_custom_option':
			return action.value;
		default:
			return state;
	}
}

// 表单状态
// 0 => 未发布
// 1 => 已发布
export const status = (state = 0, action) => {
	switch(action.type) {
		case 'update_form_state':
			return action.status;
		default:
			return state;
	}
}

// 表单的规则
export const rules = (state = fromJS([]), action) => {
	switch(action.type) {
		case 'add_rule':
			const {title, condition_title, condition_value, constraint, behaviour} = action;
			return state.push(Map({
				title, 
				condition_title, 
				condition_value, 
				constraint, 
				behaviour
			}));
			
		case 'delete_rule':
			return state.delete(action.index);

		case 'change_rule_title':
			return state.setIn([index, 'title'], action.title);

		case 'change_condition_title':
			return state.setIn([index, 'condition_title'], action.condition_title);

		case 'change_condition_value':
			return state.setIn([index, 'condition_value'], action.condition_value);

		case 'change_constraint':
			return state.setIn([index, 'constraint'], action.constraint);

		case 'change_constraint_behaviour':
			return state.setIn([index, 'behaviour'], action.behaviour);

		default:
			return state;
	}
}