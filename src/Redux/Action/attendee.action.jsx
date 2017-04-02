// 更新表格中的人员类型
export const at_type = (at_type) => ({
	type: 'at_type',
	at_type
});

// 更新搜索关键词
export const search_words = (words) => ({
	type: 'search_words',
	words
});

// 更新搜索关键词对应的条件
export const search_category = (category) => ({
	type: 'search_category',
	category
});