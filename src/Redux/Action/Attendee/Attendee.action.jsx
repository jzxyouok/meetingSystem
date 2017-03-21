// 改变人员类型
export const c_at_type = (value) => ({
	type: 'c_at_type',
	value
});

// 改变表中的人员
export const change_person = (value) => ({
	type: 'change_person',
	value
});

// 改变搜索条件
export const change_search = (config) => ({
	type: 'change_search',
	config
})