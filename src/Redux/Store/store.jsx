import {neReducer, addFormOptReducer} from '../Reducer/AddNew/AddNew';
import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({formData: {}});
const reducers = combineReducers({
	formData: addFormOptReducer
});

const store = createStore(reducers, initialState);

export default store; 