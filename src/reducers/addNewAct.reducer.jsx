export const addNewOffical = (state = [], action) {
	switch(action.type) {
		case 'addOfficalName':
			return [...state, action.officalName];
		default:
			return state;
	}
}