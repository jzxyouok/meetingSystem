export const checkReducer = (state=true, action) => {
	switch(action.type) {
		case 'changeCheckState':
			return !state;
		default:
			return state;
	}
}

export const warningShowReducer = (state = false, action) => {
	switch(action.type) {
		case 'changeWarningShow':
			return action.status;
		default:
			return state;
	}
}

export const warningWordsReducer = (state = '', action) => {
	switch(action.type) {
		case 'changeWarningWords':
			return action.words
		default:
			return state;
	}
}