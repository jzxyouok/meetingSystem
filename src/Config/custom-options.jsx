/**
 * 表单常用选项配置表
 */
// 头像
export const photo = {
	title: '请上传您的头像信息',
	name: 'photo',
	option_type: 'file',
};

// 姓名
export const username = {
	title: '请输入您的姓名',
	name: 'username',
	option_type: 'text',
};

// 电话号码
export const phone = {
	title: '请输入您的手机号码',
	name: 'phone',
	option_type: 'tel',
};

// 性别
export const sex = {
	title: '请选择性别',
	name: 'sex',
	option_type: 'radio',
	options: [
		{ id: 1, text: '男' },
		{ id: 2, text: '女' }
	]
};

// 身份证
export const idcard = {
	title: '请输入您的身份证号码',
	name: 'idcard',
	option_type: 'number',
	options: []
};

// 与会人员类型[美的人员，客户，嘉宾，会务支持]
export const guest_type = {
	title: '请选择您的与会类型',
	name: 'guest_type',
	option_type: 'select',
	fetch_url: 'http://www.cfdq.midea.com/url2'
};

// 分部，总部，外来公司
export const come_from = {
	name: 'come_from',
	midea: {
		title: '总部/营销中心/大客户',
		option_type: 'select',
		fetch_url: 'http://www.cfdq.midea.com'
	},
	outer: {
		title: '公司名称',
		option_type: 'text',
		fetch_url: 'http://www.cfdq.midea.com'
	}
};

// 客户选职位，总部选部门
export const job_title = {
	midea: {
		title: '部门',
		name: 'dept',
		option_type: 'select',
		fetch_url: 'http://www.cfdq.midea.com'
	},
	customer: {
		title: '职位',
		name: 'job_title',
		option_type: 'select',
		options: [
			{ id: 1, text: '董事长' },
			{ id: 2, text: '总经理' },
			{ id: 3, text: '操盘手' }
		]
	}
};

// 上衣尺寸
export const dress_size = {
	title: '请选择您的上衣尺寸',
	name: 'dress_size',
	option_type: 'radio',
	options: [
		{ id: 1, text: 'S' },
		{ id: 2, text: 'M' },
		{ id: 3, text: 'L' },
		{ id: 4, text: 'XL' },
		{ id: 5, text: 'XXL' },
		{ id: 6, text: 'XXXL' }
	]
};

// 交通方式
export const transportation = {
	title: '请选择您的交通方式',
	name: 'transportation',
	option_type: 'radio',
	options: [
		{ id: 1, text: '飞机' },
		{ id: 2, text: '火车' },
		{ id: 3, text: '自驾' }
	]
};

// 航班、列车号
export const transportation_code = {
	title: '请输入您的航班/列车号',
	name: 'transportation_code',
	option_type: 'text',
};

// 到达地点
export const arrival_address = {
	title: '请选择您的到达地点',
	name: 'arrival_address',
	option_type: 'select',
};

// 到达时间
export const arrival_time = {
	title: '请选择您的到达时间',
	name: 'arrival_time',
	option_type: 'date',
};

// 餐饮住宿
export const dining = {
	title: '请选择您的餐饮住宿时间',
	name: 'dining',
	option_type: 'select'
};

// 饮食习惯
export const eating_custom = {
	title: '您是否需要清真餐',
	name: 'eating_custom',
	option_type: 'radio',
	options: [
		{ id: 1, text: '是' },
		{ id: 2, text: '否' }
	]
};

// 返程方式
export const backway = {
	title: '请选择您的返程方式',
	name: 'backway',
	option_type: 'select',
	options: [
		{ id: 1, text: '飞机' },
		{ id: 2, text: '火车' },
		{ id: 3, text: '自驾' }
	]
};

// 送机/站时间
export const seeoff_time = {
	title: '请选择您的返程方式',
	name: 'seeoff_time',
	option_type: 'date',
};

// 备注
export const remark = {
	title: '备注',
	name: 'remark',
	option_type: 'text',
	options: []
};