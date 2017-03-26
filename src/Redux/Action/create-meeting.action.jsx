export const update_title = (title) => ({
	type: 'update_title',
	title
});

export const update_reg_time = (reg_time) => ({
	type: 'update_reg_time',
	reg_time
});

export const update_meeting_time = (meeting_time) => ({
	type: 'update_meeting_time',
	meeting_time
});

export const update_address = (address) => ({
	type: 'update_address',
	address
});

export const update_detail_address = (detail_address) => ({
	type: 'update_detail_address',
	detail_address
});

export const update_official = (official) => ({
	type: 'update_official',
	official
});

export const update_type = (act_type) => ({
	type: 'update_type',
	act_type
});

export const update_poster = (poster) => ({
	type: 'update_poster',
	poster
});

export const update_details = (details) => ({
	type: 'update_details',
	details
});

//会议信息页--获取整个表单的初始状态
export const init_form = (form_state) => ({
	type: 'init_form',
	form_state
});