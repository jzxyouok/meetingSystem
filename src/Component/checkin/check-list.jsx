import React, { Component } from 'react';
import { Row, Col, Modal, Table, Button, Icon } from 'antd';
import WrappedNewCheckinForm from './add-check-form';

const mock_url = 'http://www.cfdq.midea.com/wxserv/comm/image/qrcode/sv_10001_1490176856.jpg';
const mock_name = 'EDP第一日上午签到';

const columns = [
	{title: '序号', dataIndex: 'uid', key: 'uid'},
	{title: '签到主题', dataIndex: 'name', key: 'name'},
	{title: '二维码', dataIndex: 'QRcode', key: 'QRcode'},
	{title: '过期时间', dataIndex: 'end_time', key: 'end_time'}
];

const data = [
	{key: '1', uid: '1', name: <a href="javascript:;">{mock_name}</a>, QRcode: <img src={mock_url} style={{width: '30px'}} />, end_time: '2017-03-29 18:00'},
	{key: '2', uid: '2', name: <a href="javascript:;">{mock_name}</a>, QRcode: <img src={mock_url} style={{width: '30px'}} />, end_time: '2017-03-29 18:00'},
	{key: '3', uid: '3', name: <a href="javascript:;">{mock_name}</a>, QRcode: <img src={mock_url} style={{width: '30px'}} />, end_time: '2017-03-29 18:00'},
	{key: '4', uid: '4', name: <a href="javascript:;">{mock_name}</a>, QRcode: <img src={mock_url} style={{width: '30px'}} />, end_time: '2017-03-29 18:00'}
];


export default class CheckinList extends Component {
	state = {
		visible: false
	}
	showModal = (e) => {
		this.setState({
			visible: true
		});
	}
	handleCancel = (e) => {
		this.setState({
			visible: false
		});
	}
	handleSubmit = (e) => {
		this.setState({
			visible: false
		});
	}
	render() {
		return (
			<div className="checkin">
				<div className="check_list">
					<Row>
						<Button type="primary" onClick={this.showModal}>
							新建签到
							<Icon type="plus-circle-o" />
						</Button>
						<Modal 
							title="新建会议签到"
							visible={this.state.visible}
							onOK={this.handleSubmit}
							onCancel={this.handleCancel}
						>
							<WrappedNewCheckinForm />
						</Modal>
					</Row>
					<Row>
						<Table 
							columns={columns}
							dataSource={data}
							bordered
							size="middle"
						/>
					</Row>
				</div>
			</div>
		)
	}
}