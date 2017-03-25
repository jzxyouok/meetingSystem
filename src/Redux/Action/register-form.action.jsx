// 添加单选
export const add_single_choice = (index = 0, title = '', options = [], name = `radio-${Date.now()}`, option_type = 'radio') => ({
	type: 'add_single_choice',
	index,
	title,
	name,
	options,
	option_type
});

// 添加多选
export const add_muti_choice = (index = 0, title = '', options = [], name = `checkbox-${Date.now()}`, option_type = 'checkbox') => ({
	type: 'add_muti_choice',
	index,
	title,
	name,
	options,
	option_type
});

// 添加下拉框
export const add_select = (index = 0, title = '', options = [], name = `select-${Date.now()}`, option_type = 'select') => ({
	title: 'add_select',
	index,
	title,
	name,
	options,
	option_type
});

// 添加日期
export const add_date = (index = 0, title='', name="date-${{Date.now()}", option_type='date') => ({
	title: 'add_date',
	index,
	title,
	name,
	option_type
});

// 添加文件
export const add_file = (index = 0, title='', name="file-${{Date.now()}", option_type='file') => ({
	title: 'add_file',
	index,
	title,
	name,
	option_type
});

// 添加普通文本框
export const add_text = (index = 0, title='', name="text-${{Date.now()}", option_type='text') => ({
	title: 'add_text',
	index,
	title,
	name,
	option_type
});

// 添加多行文本框
export const add_textarea = (index = 0, title='', name="textarea-${{Date.now()}", option_type='textarea') => ({
	title: 'add_textarea',
	index,
	title,
	name,
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