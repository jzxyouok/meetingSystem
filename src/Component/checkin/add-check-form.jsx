import React, { Component } 			from 'react';
import { Form, DatePicker, Input } 		from 'antd';
import { connect } 						from 'react-redux';

import * as AC 							from '../../Redux/Action/checkin.action';

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
						/>
					)}
				</FormItem>
			</Form>
		)
	}
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	cName: (v) => dispatch( AC.new_checkin_name(v) ),
	cEndTime: (t) => dispatch( AC.new_checkin_end_time(t) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
	onFieldsChange: (props, fields) => {
		const fieldName = Object.keys(fields)[0];
		switch(fieldName) {
			case 'check_name':
				props.cName(fields[fieldName].value);
				break;
			case 'end_time':
				props.cEndTime(fields[fieldName].value.format('YYYY-MM-DD HH:mm:ss'));
				break;
			default:
				break;
		}
	}
})(NewCheckinForm));





