import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon, Row, Col, Input, Select, Table }	from 'antd';

import Handler 		from './attendee-handler';
import Condition 	from './attendee-condition';
import '../../Style/attendee.scss';

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
				<Handler />
				<Condition />
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