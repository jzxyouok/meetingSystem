import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducers = () => {};

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;