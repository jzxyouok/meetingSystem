// 表明表单入口文件
import React, {Component} from 'react';
import {Row, Col} from 'antd';
import FormSelect from './form-select';
import FormField from './form-field';
import FormDetail from './form-detail';
import '../../Style/register-form.scss';

export default class Register extends Component {
	render() {
		return (
			<div className="register-form">
				<Row>
					<FormSelect />
				</Row>
				<Row>
					<Col span={18}><FormField /></Col>
					<Col span={6}><FormDetail /></Col>
				</Row>
			</div>
		)
	}
}