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
		
		default:
			return state;
	}
}