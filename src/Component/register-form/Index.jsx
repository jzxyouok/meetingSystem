import React, { Component } 		from 'react';
import { Row, Col, Button, Icon, Tag } 	from 'antd';

import CustomOptions 				from './custom-options';
import AddCustomize 				from './add-item-operator';
import CustomizeOptions 			from './customize-options';
import FormHandler 					from './form-handler';
import FormState 					from './form-status';

import '../../Style/register-form.scss';

export default class RegisterForm extends Component {
	render() {
		const id = this.props.params.id;
		const row_label_layout = {
			xs: { span: 24 },
			sm: { span: 4 }
		};
		const row_item_layout = {
			xs: { span: 24 },
			sm: { span: 16 }
		}
		return (
			<div className="register-form">
				<p className="title">报名表单</p>
				<Row>
					<FormState />
					<Col {...row_item_layout} className="options" offset={4}>添加表单固有项</Col>
				</Row>
				<CustomOptions />
				<Row>
					<Col {...row_item_layout} className="options" offset={4}>添加表单自定义项</Col>
				</Row>
				<AddCustomize />
				<CustomizeOptions />
				<FormHandler id={id} />
			</div>
		)
	}
}