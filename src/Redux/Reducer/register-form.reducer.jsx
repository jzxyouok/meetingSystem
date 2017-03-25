import { List } from 'immutable';
// 处理自定义部分的表单内容
export const customize = (state = List([]), action) => {
	switch(action.type) {
		case 'add_single_choice':
			let opt_len = state.size;
			const { index, title, name, options, option_type } = action;
			return state.push({ 
				index: opt_len, 
				title, 
				name, 
				options, 
				option_type 
			});

		case 'update_title':
			console.log(state.toJS());
			console.log(action);
			return state.setIn([action.index+'', 'title'], action.title);
		
		case 'update_options':
			console.log(state.toJS());
			console.log(action);
			return state.setIn([action.index+'', 'options'], action.options);
		
		default:
			return state;
	}
}