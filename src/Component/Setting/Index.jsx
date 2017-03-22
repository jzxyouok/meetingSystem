import React, { Component } from 'react';
import { Form, Button, Input, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem>
					{getFieldDecorator('username')(
						<Input placeholder="username" prefix={<Icon type="user" style={{fontSize: 13}} />} />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password')(
						<Input placeholder="password" prefix={<Icon type="lock" style={{fontSize: 13}} />} />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remeber', {
						valuePropName: 'checked',
						initialValue: true
					})(
						<Checkbox>Remeber me</Checkbox>
					)}
				</FormItem>
				<FormItem>
					<Button
						type="primary"
						htmlType="submit"
						>
						login
					</Button>
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(NormalLoginForm);