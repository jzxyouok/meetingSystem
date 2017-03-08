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
			console.log(state.toJS());
			return state.updateIn([action.index+'', 'necessary'], x => !x);
			break;
		default:
			return state;
	}
}