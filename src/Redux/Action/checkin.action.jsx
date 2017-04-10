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

// 当前显示签到详细信息的OID
export const show_oid = (oid) => ({
	type: 'show_oid',
	oid
});

// 本次签到总人数
export const total_num = (num) => ({
	type: 'total_num',
	num,
});