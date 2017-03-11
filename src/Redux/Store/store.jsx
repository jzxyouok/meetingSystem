import {neReducer, addFormOptReducer} from '../Reducer/AddNew/AddNew';
import {combineReducers} from 'redux-immutable';
import {createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';


const initialState = Immutable.fromJS({formData: {}});
const reducers = combineReducers({
	formData: addFormOptReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store; 