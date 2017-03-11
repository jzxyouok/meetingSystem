// 改变表单字段的必要性
export const changeNe = (index) => ({
	type: 'changeNe',
	index
});

// 增加radio选项
export const addRadioOpt = {
	type: 'addRadioOpt'
}

// 增加checkbox选项
export const addCheckboxOpt = {
	type: 'addCheckboxOpt'
}

// 增加select选项
export const addSelectOpt = {
	type: 'addSelectOpt'
}

// 更改日期类型
export const changeDateType = {
	type: 'changeDateType'
}

// 增加性别选项
export const addFormOpt = (name, defaultTitle, optType, defaultOptions = null) => ({
	type: 'addFormOpt',
	name,
	defaultTitle,
	optType,
	defaultOptions
});

// 向上移动表单项
export const moveUp = (index) => ({
	type: 'moveUp',
	index
});

// 向下移动表单项
export const moveDown = (index) => ({
	type: 'moveDown',
	index
});

// 删除表单的某一项
export const delFormItem = (index) => ({
	type: 'delFormItem',
	index
});

// 删除单选，多选，下拉框中的某一个选项
export const delOption = (inputIndex, optIndex) => ({
	type: 'delOption',
	inputIndex,
	optIndex
});

// 添加单选，多选，下拉框中的某一项
export const addOption = (inputIndex, optIndex, value) => ({
	type: 'addOption',
	inputIndex,
	optIndex,
	value
});

// 改变题目的标题
export const changeTitle = (inputIndex, value) => ({
	type: 'changeTitle',
	inputIndex,
	value
});

// 改变选项的值
export const changeOption = (inputIndex, optIndex, value) => ({
	type: 'changeOption',
	inputIndex,
	optIndex,
	value
});

// 提交报名表单
export const submitForm = (value) => ({
	type: 'submitForm',
	value
});