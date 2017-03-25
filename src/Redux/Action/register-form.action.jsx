const time = Date.now();
// 添加单选
export const add_single_choice = (index = 0, title = '', options = [], name = `radio${time}`, option_type = 'radio') => ({
	type: 'add_single_choice',
	index,
	title,
	name,
	options,
	option_type
});

// 更新标题信息
export const update_title = (index, title) => ({
	type: 'update_title',
	index,
	title
});

// 更新选项信息
export const update_options = (index, options) => ({
	type: 'update_options',
	index,
	options
});