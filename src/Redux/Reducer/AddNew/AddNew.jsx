import Immutable from 'immutable';

export const addFormOptReducer = (state, action) => {
	switch(action.type) { 
		case 'addFormOpt':
			let formData = state.toJS();
			let keys = Object.keys(formData);
			let nowIndex = null;
			if(keys.length == 0) {
				nowIndex = '0'
			} else {
				let	lastKey = keys[keys.length - 1];
				nowIndex = (++lastKey)+'';
			}
			if(action.defaultOptions) {
				return state.set(nowIndex, Immutable.fromJS({
					title: action.defaultTitle,
					necessary: false,
					name: action.name,
					optType: action.optType,
					options: action.defaultOptions
				}));
			} else {
				return state.set(nowIndex, Immutable.fromJS({
					title: action.defaultTitle,
					necessary: false,
					name: action.name,
					optType: action.optType
				}));
			}

		case 'changeNe':
			return state.updateIn([action.index+'', 'necessary'], x => !x);

		case 'moveUp':
			// 这里需要注意数字和字符串之间的转换
			let idx1 = action.index + '';
			let prevItem1 = state.get((idx1-1) + '');
			let nowItem1  = state.get(idx1);
			console.log(prevItem1, nowItem1);
			return state.set(idx1, prevItem1)
						.set((idx1-1)+'', nowItem1);

		case 'moveDown':
			let idx2 = action.index + '';
			let nowItem2 = state.get(idx2);
			let nextItem2 = state.get((+idx2+1) + '');
			return state.set(idx2, nextItem2)
						.set((+idx2+1)+'', nowItem2);

		default:
			return state;
	}
}