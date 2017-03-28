import React, { Component } 			from 'react';
import { Form, DatePicker, Input } 		from 'antd';

const FormItem = Form.Item;

class NewCheckinForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem
					label="签到主题"
					hasFeedback
					>
					{getFieldDecorator('check_name', {
						rules: [{required: true, message: '签到主题不能为空'}]
					})(
						<Input placeholder="请输入签到主题" />
					)}
				</FormItem>
				<FormItem
					label="截止时间"
					hasFeedback
					>
					{getFieldDecorator('end_time', {
						rules: [{required: true, message: '请选择签到截止时间'}]
					})(
						<DatePicker 
							style={{width: '100%'}} 
							showTime 
							format="YYYY-MM-DD HH:mm" 
						s/>
					)}
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(NewCheckinForm);