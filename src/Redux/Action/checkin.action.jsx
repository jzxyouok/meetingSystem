// 新建签到详情信息--签到主题
export const new_checkin_name = (check_name) => ({
	type: 'new_checkin_name',
	check_name
});

// 新建签到详情信息--签到截止时间
export const new_checkin_end_time = (end_time) => ({
	type: 'new_checkin_end_time',
	end_time
});

// 更新签到列表信息
export const checkin_list = (list) => ({
	type: 'checkin_list',
	list
});

// 创建签到成功之后，在签到列表中插入一条记录
export const unshift_checkin = (item) => ({
	type: 'unshift_checkin',
	item
});

// 要删除条目的oid
export const del_oid = (oid) => ({
	type: 'del_oid',
	oid
});

// 签到的详细信息
export const checkin_details = (info) => ({
	type: 'checkin_details',
	info
});

// 过滤之后的签到信息
export const filter_checkin_details = (info) =>({
	type: 'filter_checkin_details',
	info
});

// 本次签到总人数,标题
export const total_num_title = (num, title) => ({
	type: 'total_num_title',
	num,
	title
});

// 编辑签到人员
export const edit_person = (person) => ({
	type: 'edit_person',
	person
});

// 更改正在编辑人员的签到状态
export const change_checkin_status = {
	type: 'change_checkin_status'
};