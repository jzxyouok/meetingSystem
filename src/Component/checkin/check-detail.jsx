import React from 'react';
import { Row, Col, Table, Select, Icon, Button } from 'antd';

const Option = Select.Option;

const check_columns = [
	{title: '姓名', dataIndex: 'name', key: 'name'},
	{title: '手机', dataIndex: 'tel', key: 'tel'},
	{title: '状态', dataIndex: 'status', key: 'status'},
	{title: '签到时间', dataIndex: 'time', key: 'time'}
];

const check_data = [
	{key: '1', name: 'aaa', tel: '13000000000', status: '已签到', time: '2017-03-14 15:00'},
	{key: '2', name: 'aaa', tel: '13000000000', status: '已签到', time: '2017-03-14 15:00'},
	{key: '3', name: 'aaa', tel: '13000000000', status: '已签到', time: '2017-03-14 15:00'},
	{key: '4', name: 'aaa', tel: '13000000000', status: '已签到', time: '2017-03-14 15:00'},
	{key: '5', name: 'aaa', tel: '13000000000', status: '已签到', time: '2017-03-14 15:00'}
];

const CheckDetail = () => (
	<div className="check_detail">
		<Row>
			<h2 className="check_detail_title">EDP人员信息</h2>
			<p>总人数: 100</p>
		</Row>
		<Row>
			<Col span={4}>
				<Select defaultValue="0" style={{width: '98%'}}>
					<Option value="0">请选择签到状态</Option>
					<Option value="1">已签到</Option>
					<Option value="2">未签到</Option>
				</Select>
			</Col>						
			<Col span={20}>
				<Button type="primary" className="search">查询 <Icon type="search" /></Button>
				<a href="javascript:;" className="ant-btn ant-btn-default">返回签到列表 <Icon type="rollback" /></a>
			</Col>				
		</Row>
		<Row>
			<Table 
				columns={check_columns}
				dataSource={check_data}
				bordered
			/>
		</Row>
	</div>
);

export default CheckDetail;