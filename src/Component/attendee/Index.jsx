import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon, Row, Col, Input, Select, DatePicker }	from 'antd';

const MenuItem = Menu.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const menu = (
	<Menu>
		<MenuItem key="1">所有参会人员</MenuItem>
		<MenuItem key="2">未审核人员</MenuItem>
	</Menu>
);

export default class Attendee extends Component {
	render() {
		return (
			<div className="attendee">
				<Row>
					<Col span={12} className="participants">
						<Button type="primary">参会人员(0)</Button>
						<Button>未审核(0)</Button>
					</Col>
					<Col span={12} className="output">
						<Dropdown overlay={menu}>
							<Button type="primary">导出 <Icon type="cloud-download" /></Button>
						</Dropdown>
					</Col>					
				</Row>
				<Row>
					<Col span={12}>
						<Input />
					</Col>
				</Row>
				<Row>
					<Col span={2}>搜索条件</Col>
					<Col span={8}>
						<Select style={{width: '80%'}}>
							<Option value="1">姓名</Option>
							<Option value="2">手机号</Option>
						</Select>
					</Col>
					<Col span={2}>日期选择</Col>
					<Col span={8}>
						<RangePicker 
							showTime
							format="YYYY-MM-DD HH:mm:ss"
						/>
					</Col>
				</Row>
				<Row>
					<Button type="primary">搜索<Icon type="search" /></Button>
				</Row>
			</div>
		)
	}
}