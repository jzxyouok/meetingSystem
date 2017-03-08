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