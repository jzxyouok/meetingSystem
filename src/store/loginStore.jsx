import {checkReducer, warningShowReducer, warningWordsReducer} from '../reducers/loginReducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	checked: checkReducer,
	isWarningShow: warningShowReducer,
	warningWords: warningWordsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));