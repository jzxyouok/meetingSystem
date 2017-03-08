import {addFormOptReducer} from '../reducer/AddNew/AddNew';
import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';

const reducers = combineReducers({
	formData: addFormOptReducer
});

const store = createStore(reducers);

export default store;