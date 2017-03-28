import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon, Row, Col, Input, Select, DatePicker, Table }	from 'antd';

import '../../Style/attendee.scss';

const MenuItem = Menu.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const menu = (
	<Menu>
		<MenuItem key="1">所有参会人员</MenuItem>
		<MenuItem key="2">未审核人员</MenuItem>
	</Menu>
);

// const columns = [
// 	{title: 'Name', dataIndex: 'name'},
// 	{title: 'Age', dataIndex: 'age'},
// 	{title: 'Address', dataIndex: 'address'}
// ];

// let data = [];

// for (let i = 0; i < 46; i++) {
// 	data.push({
// 		key: i,
// 		name: `aaa-${i}`,
// 		age: 32+i,
// 		address: `address-${i}`
// 	})
// }

const columns = [
  	{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  	{ title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  	{ title: 'Column 1', dataIndex: 'address', key: '1' },
  	{ title: 'Column 2', dataIndex: 'address', key: '2' },
  	{ title: 'Column 3', dataIndex: 'address', key: '3' },
  	{ title: 'Column 4', dataIndex: 'address', key: '4' },
  	{ title: 'Column 5', dataIndex: 'address', key: '5' },
  	{ title: 'Column 6', dataIndex: 'address', key: '6' },
  	{ title: 'Column 7', dataIndex: 'address', key: '7' },
  	{ title: 'Column 8', dataIndex: 'address', key: '8' },
  	{
    	title: 'Action',
    	key: 'operation',
    	fixed: 'right',
    	width: 100,
    	render: () => <a href="#">action</a>,
  	},
];

const data = [];

for(let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: 'John Brown',
		age: 32,
		address: 'New York Park'
	})
}


const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	onSelect: (record, selected, selectedRows) => {
		// console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected, selectRows, changeRows) => {
		// console.log(selected, selectRows, changeRows);
	},
	getCheckboxProps: () => ({})
};

export default class Attendee extends Component {
	state = {
		selectedRowKeys: [],
		loading: false
	}
	
	start = () => {
		this.setState({loading: true});
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false
			})
		}, 1000);
	}

	onSelectChange = (selectedRowKeys) => {
		this.setState({selectedRowKeys});
	}

	render() {
		const { loading, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange
		};
		const hasSelected = selectedRowKeys.length > 0;

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
						<Input placeholder="请输入搜索关键字：姓名，手机号等" />
					</Col>
				</Row>
				<Row className="condition">
					<Col span={2}>搜索条件</Col>
					<Col span={6}>
						<Select defaultValue="0" style={{width: '90%'}}>
							<Option value="0">请选择搜索条件</Option>
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
				<Row>
					<Col span={24}>
						<Table 
							dataSource={data} 
							columns={columns}
							bordered
							rowSelection={rowSelection}
							size="middle"
							scroll={{x: 1300}}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}