export const check = {
	type: 'changeCheckState'
};

export const wshow = (status) => ({
	type: 'changeWarningShow',
	status
});

export const wwords = (words) => ({
	type: 'changeWarningWords',
	words
});