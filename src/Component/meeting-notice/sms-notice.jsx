import React, { Component } from 'react';
import { Row, Col, Select, Input, Button } from 'antd';

export default class SMSNotice extends Component {
	render() {
		return (
			<div className="sms">
				<Row>
					<Col span={4}>收信人</Col>
					<Col span={20}>
						<Select defaultValue="0">
							<Option value="0">请选择通知人员</Option>
							<Option value="1">所有参会人员</Option>
							<Option value="2">未签到人员</Option>
						</Select>
					</Col>
				</Row>
				<Row>
					<Col span={4}>短信内容</Col>
					<Col span={20}>
						<Input type="textarea" placeholder="请填写短信内容，姓名请用${name}代替，手机请用${tel}代替" />
					</Col>
				</Row>
				<Row>
					<Col offset={4}>
						<Button type="primary">立即发送</Button>
					</Col>
				</Row>
			</div>
		)
	}
}