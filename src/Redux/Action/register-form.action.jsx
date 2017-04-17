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
	type: 'add_select',
	index,
	title,
	name,
	options,
	option_type
});

// 添加日期
export const add_date = (index = 0, title='', name=`date-${Date.now()}`, option_type='date') => ({
	type: 'add_date',
	index,
	title,
	name,
	option_type
});

// 添加文件
export const add_file = (index = 0, title='', name=`file-${Date.now()}`, option_type='file') => ({
	type: 'add_file',
	index,
	title,
	name,
	option_type
});

// 添加普通文本框
export const add_text = (index = 0, title='', name=`text-${Date.now()}`, option_type='text') => ({
	type: 'add_text',
	index,
	title,
	name,
	option_type
});

// 添加多行文本框
export const add_textarea = (index = 0, title='', name=`textarea-${Date.now()}`, option_type='textarea') => ({
	type: 'add_textarea',
	index,
	title,
	name,
	option_type
});

// 添加联动选择项目
export const add_linkage = (index = 0, title='', name=`linkage-${Date.now()}`, option_type='linkage') => ({
	type: 'add_linkage',
	index,
	title,
	name,
	option_type
})

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

// 删除选项
export const delete_option = (index) => ({
	type: 'delete_option',
	index
});

// 上移选项
export const move_up_option = (index) => ({
	type: 'move_up_option',
	index
});

// 下移选项
export const move_down_option = (index) => ({
	type: 'move_down_option',
	index
});

// 更新报名表单的发布和草稿状态
export const update_form_state = (status) => ({
	type: 'update_form_state',
	status
});

/******************************************************************************
 ****************************** 新建规则项 **************************************
 ******************************************************************************/
// 添加规则项
export const add_rule = (title, condition_title, condition_value, constraint, behaviour) => ({
	type: 'add_rule',
	title,
	condition_title,
	condition_value,
	constraint,
	behaviour,
});

// 删除规则项
export const delete_rule = (index) => ({
	type: 'delete_rule',
	index,
});

// 更改规则的名称
export const change_rule_title = (index, title) => ({
	type: 'change_rule_title',
	index,
	title
})

// 更改规则的条件
export const change_condition_title = (index, condition_title) => ({
	type: 'change_condition_title',
	index,
	condition_title,
});

// 更改条件的值
export const change_condition_value = (index, condition_value) => ({
	type: 'change_condition_value',
	index,
	condition_value,
});

// 更改约束项
export const change_constraint = (index, constraint) => ({
	type: 'change_constraint',
	index,
	constraint,
});

// 更改约束项的表现
export const change_constraint_behaviour = (index, behaviour) => ({
	type: 'change_constraint_behaviour',
	index,
	behaviour,
});

/******************************************************************************
 ****************************** 预览表单 **************************************
 ******************************************************************************/
export const preview_formdata = (formdata) => ({
	type: 'preview_formdata',
	formdata
});