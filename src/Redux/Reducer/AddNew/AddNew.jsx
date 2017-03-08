import Immutable from 'immutable';

export const addFormOptReducer = (state, action) => {
	switch(action.type) { 
		case 'addFormOpt':
			let formData = state.toJS();
			let keys = Object.keys(formData),
				lastKey = keys[keys.length - 1], 
				nowIndex = ++lastKey;
			if(action.defaultOptions) {
				return state.setIn(['formData', nowIndex], {
					title: action.defaultTitle,
					name: action.name,
					type: action.type,
					options: action.defaultOptions
				});
			} else {
				return state.setIn(['formData', nowIndex], {
					title: action.defaultTitle,
					name: action.name,
					type: action.type
				});
			}

		case 'changeNe':
			let newState = state.updateIn(['formData', action.index + '', 'necessary'], x => !x);
			console.log(newState.toJS()['formData'][0]);
			return newState;
		default:
			return state;
	}
}