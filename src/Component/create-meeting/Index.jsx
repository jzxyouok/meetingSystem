import React, { Component } from 'react';
import { Form, Input, DatePicker, Cascader } from 'antd';
import fetch from 'isomorphic-fetch';

import { getAddress } from '../../Config/apiUrl';
import '../../Style/create-meeting.scss';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class CreateMeeting extends Component {
	state = {
		options: []
	}
	componentDidMount() {
		fetch(getAddress)
			.then(res => res.json())
			.then(res => {
				let province = [];
				res.map(item => {
					province.push({label: item, value: item, isLeaf: false});
				})
				this.setState({
					options: province
				})
			})
			.catch(err => alert('网络错误'));
	}
	handleSubmit = (e) => {
		e.preventDefault();
	}
	load_address_data = (selectedOptions) => {
		const provinceOption = selectedOptions[selectedOptions.length - 1];
		provinceOption.loading = true;
		fetch(`${getAddress}?province=${provinceOption.label[0]}`)
			.then(res => res.json())
			.then(res => {
				provinceOption.loading = false;
				let city = [];
				res.map(item => {
					city.push({label: item, value: item});
				});
				provinceOption.children = city;
				this.setState({
					options: [...this.state.options]
				});
			})
			.catch(err => alert('网络错误'))
	}
	change_address = () => {}
	render() {
		const formItemLayout = {
			labelCol: {
				xs: {span: 24},
				sm: {span: 4}
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 14}
			}
		}

		const { getFieldDecorator } = this.props.form;
		return (
			<Form className="create-meeting" onSubmit={this.handleSubmit}>
				<FormItem
					{...formItemLayout}
					label="会议主题"
					hasFeedback
					>
					{getFieldDecorator('name', {
						rules: [{required: true, message: '会议主题不能为空'}]
					})(
						<Input />
					)}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="报名时间"
					hasFeedback
					>
					{getFieldDecorator('reg_time', {
						rules: [{type: 'array', required: true, message: '请选择会议时间'}]
					})(
						<RangePicker showTime format="YYYY-MM-DD HH:mm" />
					)}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="会议地址"
					hasFeedback
					>
					{getFieldDecorator('address', {
						initialValue: ['广东省', '佛山市'],
						rules: [{type: 'array', required: true, message: '请选择地址'}]
					})(
						<Cascader
							options={this.state.options}
							loadData={this.load_address_data}
							changeOnSelect
						/>
					)}
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(CreateMeeting);