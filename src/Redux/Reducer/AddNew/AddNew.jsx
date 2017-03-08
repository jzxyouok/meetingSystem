import Immutable from 'immutable';

const initialState = Immutable.fromJS(
{
	formData: {
		0:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'text'
		}, 
		1:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'textarea'
		}, 
		2:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'radio',
			options: {
	            0: 'option1',
	            1: 'option2',
	            2: 'option3'
	        }
		}, 
		3:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'checkbox',
			options:{
	            0: 'option1',
	            1: 'option2',
	            2: 'option3'
	        }
		}, 
		4:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'select',
			options: {
	            0: 'option1',
	            1: 'option2',
	            2: 'option3'
	        }
		}, 
		5:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'file'
		}, 
		6:{
			necessary: true,
			title: 'title of the question',
	        name: 'form name',
			type: 'date',
			dateType: 1
		}
	}
}
);

export const neReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'changeNe':
			return state.updateIn(['formData', action.index, 'necessary'], x => !x);
		default:
			return state;
	}
}

export const addFormOptReducer = (state = initialState, action) => {
	console.log(state);
	let {formData} = state.toJS();
	let keys = Object.keys(formData),
		lastKey = keys[keys.length - 1],
		nowIndex = lastKey++;
	switch(action.type) {
		case 'addFormOpt':
			if(action.defaultOptions) {
				return state.setIn(['formData', nowIndex], {
					title: action.defaultTitle,
					name: action.name,
					type: action.type,
					options: action.defaultOptions
				});
			} else {
				return state.setIn(['formData', nowkey], {
					title: action.defaultTitle,
					name: action.name,
					type: action.type
				});
			}
		default:
			return state;
	}
}