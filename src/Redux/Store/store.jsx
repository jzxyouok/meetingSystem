import {neReducer, addFormOptReducer} from '../Reducer/AddNew/AddNew';
import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';
import Immutable from 'immutable';

const initialState = Immutable.fromJS(
{
	formData: {
		0:{
			necessary: false,
			title: 'title of the question',
	        name: 'form name',
			type: 'text'
		}, 
		1:{
			necessary: false,
			title: 'title of the question',
	        name: 'form name',
			type: 'textarea'
		}, 
		2:{
			necessary: false,
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
			necessary: false,
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
			necessary: false,
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
			necessary: false,
			title: 'title of the question',
	        name: 'form name',
			type: 'file'
		}, 
		6:{
			necessary: false,
			title: 'title of the question',
	        name: 'form name',
			type: 'date',
			dateType: 1
		}
	}
}
);
const reducers = combineReducers({
	formData: addFormOptReducer
});

const store = createStore(reducers, initialState);

export default store; 