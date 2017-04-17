/**
 * 报名表单--入口组件
 */
import React, { Component } 		from 'react';
import { Row, Col, Button, Icon, Tag, Tabs } 	
									from 'antd';

import AddCustomize 				from './add-item-operator';
import CustomizeOptions 			from './customize-options';
import FormHandler 					from './form-handler';
import FormState 					from './form-status';
import FormRules 					from './form-rules';

import '../../Style/register-form.scss';

const TabPane = Tabs.TabPane;

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
				<Tabs defaultActiveKey="2">
					<TabPane key="1" tab="报名表单">
						<Row>
							<FormState />
							<Col {...row_item_layout} className="options" offset={4}>添加表单自定义项</Col>
						</Row>
						<AddCustomize />
						<CustomizeOptions />
						<FormHandler id={id} />
					</TabPane>
					<TabPane key="2" tab="新建规则">
						<FormRules />
					</TabPane>
				</Tabs>
			</div>
		)
	}
}
