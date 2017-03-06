export const toggleAddOfficalModal = (state = false, action) => {
	switch(action.type) {
		case 'showAddOfficalModal':
			return !state;
		default:
			return state;
	}
}

export const toggleAddCategory = (state = false, action) => {
	switch(action.type) {
		case 'toggleAddCategory':
			return !state;
		default:
			return state;
	}
}

export const toggleAddTags = (state = false, action) => {
	switch(action.type) {
		case 'toggleAddTags':
			return !state;
		default:
			return state;
	}
}

export const addNewOffical = (state = [], action) => {
	switch(action.type) {
		case 'addOfficalName':
			return [...state, action.officalName];
		default:
			return state;
	}
}