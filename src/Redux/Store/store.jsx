import {combineReducers} from 'redux-immutable';
import {createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';

import AddNewReducers from '../Reducer/AddNew/AddNew';
import NewActReducers from '../Reducer/NewAct/NewAct.reducer';

const combine_reducers = Object.assign({}, AddNewReducers, NewActReducers);

const reducers = combineReducers(combine_reducers);

const store = createStore(reducers, applyMiddleware(thunk));

export default store; 