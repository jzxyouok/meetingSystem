import React, { Component } from 'react';
import { Select } 			from 'antd';
import Item 				from './form-item';
import * as opts 			from '../../Config/custom-options.jsx';
import { connect }  		from 'react-redux';
import { update_custom_option } from '../../Redux/Action/register-form.action';


const Option = Select.Option;

const options = [
	{ id: 0, 	name: 'photo', 			value: '照片' },
	{ id: 1, 	name: 'username', 		value: '姓名' },
	{ id: 2, 	name: 'phone', 			value: '电话号码' },
	{ id: 3, 	name: 'sex', 			value: '性别' },
	{ id: 4, 	name: 'idcard', 		value: '身份证号' },
	{ id: 5, 	name: 'guest_type', 	value: '与会人员类型' },
	{ id: 6, 	name: 'come_from', 		value: '总部、分部、外部公司' },
	{ id: 7, 	name: 'jod_title', 		value: '职位、部门' },
	{ id: 8, 	name: 'dress_size', 	value: '上衣尺寸' },
	{ id: 9, 	name: 'transportation', 		value: '交通方式' },
	{ id: 10, 	name: 'transportation_code', 	value: '航班/列车号' },
	{ id: 11, 	name: 'arrival_address', 		value: '到达地点' },
	{ id: 12, 	name: 'arrival_time', 			value: '到达时间' },
	{ id: 13, 	name: 'dining', 				value: '餐饮住宿' },
	{ id: 14, 	name: 'eating_custom', 			value: '饮食习惯' },
	{ id: 15, 	name: 'backway', 				value: '返程方式' },
	{ id: 16, 	name: 'seeoff_time', 			value: '送机/站时间' },
	{ id: 17, 	name: 'remark', 				value: '备注' },
];

const select_children = options.map(item => (
	<Option key={item.id} value={item.name}>{item.value}</Option>
));

class CustomOption extends Component {
	handleChange = (value) => {
		const custom_options = value.map(item => opts[item]);
		this.props.update_custom_options(custom_options);
	}

	render() {
		console.log(this.props.opts);
		return (
			<Item desc="表单常用项">
				<Select 
					multiple
					style={{width: '100%'}}
					placeholder="请选择本次表单的常用项"
					onChange={this.handleChange}
				>
					{select_children}
				</Select>
			</Item>
		)
	}
}

const mapStateToProps = (state) => ({
	opts: state.getIn(['register_form', 'custom'])
});
const mapDispatchToProps = (dispatch) => ({
	update_custom_options: (val) => dispatch(update_custom_option(val))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomOption);





























