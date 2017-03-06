import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
	toggleAddOfficalModal, 
	toggleAddCategory,
	toggleAddTags
} from '../reducers/addNewAct.reducer';

const reducers = combineReducers({
	isOfficalModalShow: toggleAddOfficalModal,
	isCategoryModalShow: toggleAddCategory,
	isTagsModalShow: toggleAddTags
});
const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;