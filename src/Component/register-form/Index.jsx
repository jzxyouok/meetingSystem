// 表明表单入口文件
import React, {Component} 	from 'react';
import {Row, Col} 			from 'antd';
import FormSelect 			from './form-select';
import FormField 			from './form-field';
import FormDetail 			from './form-detail';
import '../../Style/register-form.scss';

export default class Register extends Component {
	render() {
		return (
			<div className="register-form">
				<Row>
					<Col offset={3}>
						<FormSelect action_id={this.props.params.id} />
					</Col>
				</Row>
				<Row>
					<Col span={12} offset={3}><FormDetail /></Col>
					<Col span={6} offset={3}><FormField /></Col>
				</Row>
			</div>
		)
	}
}