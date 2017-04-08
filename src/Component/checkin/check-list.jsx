import React, { Component } 	from 'react';
import { Row, Col, Modal, Table, Button, Icon, message } 
								from 'antd';
import { connect } 				from 'react-redux';
import fetch 					from 'isomorphic-fetch';
import WrappedNewCheckinForm 	from './add-check-form';
import * as AC 					from '../../Redux/Action/checkin.action';
import { addCheckin, getCheckin }
					 			from '../../Config/apiUrl';

const mock_url = 'http://www.cfdq.midea.com/wxserv/comm/image/qrcode/sv_10001_1490176856.jpg';
const mock_name = 'EDP第一日上午签到';

const columns = [
	{title: '序号', dataIndex: 'oid', key: 'oid'},
	{title: '签到主题', dataIndex: 'name', key: 'name'},
	{title: '二维码', dataIndex: 'QRcode_url', key: 'QRcode_url'},
	{title: '过期时间', dataIndex: 'expire_time', key: 'expire_time'},
	{title: '创建时间', dataIndex: 'load_time', key: 'load_time'},
];

const data = [{
	key: '1', 
	oid: '1', 
	name: mock_name, 
	QRcode_url: <img src={mock_url} style={{width: '30px'}} />, 
	expire_time: '2017-03-29 18:00', 
	load_time: '2017-03-29 18:00'
}];


class CheckinList extends Component {
	state = {
		visible: false
	}
	componentDidMount() {
		fetch(`${getCheckin}?action_id=${this.props.id}`)
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				this.props.set_checkin_list(res.message);
			} else {
				message.warn('您还没有创建签到哦，点击新建按钮创建签到');
			}
		})
		.catch(err => message.error('网络错误，请稍后重试，或联系系统管理员'));
	}
	
	// 显示模态框
	showModal = (e) => {
		this.setState({
			visible: true
		});
	}
	
	// 隐藏模态框
	handleCancel = (e) => {
		this.setState({
			visible: false
		});
	}
	
	// 提交 新建的会议
	submitCheckin = (info) => {
		fetch(addCheckin, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: info
		})
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				message.success(res.message);
				this.setState({
					visible: false
				})
			} else {
				message.warn(res.message);
			}
		})
		.catch(err => console.error(err));
	}
	
	// 点击提交按钮
	handleSubmit = (e) => {
		const info = this.props.new_checkin_info;
		if(!info.name) {
			message.warn('请填写签到主题');
			return;
		} 
		if(!info.end_time) {
			message.warn('请选择会议截止时间');
			return;
		}
		const submitInfo = `id=${this.props.id}&scene_desc=${info.name}&expire_time=${info.end_time}`;
		this.submitCheckin(submitInfo);
	}
	
	// 删除项目
	delItem = () => {

	}

	render() {
		const checkin_list = this.props.list;
		const data = checkin_list.map((item, index) => {
			const { oid, qrcode_url, load_time, expire_time, name } = item;
			let obj = {};
			obj.key = oid;
			obj.name = name;
			obj.oid = index+1;
			obj.QRcode_url = <img src={`http://www.cfdq.midea.com/meeting/Uploads/qrcode/${qrcode_url}`} style={{width: '30px'}} />, 
			obj.load_time = load_time,
			obj.expire_time = expire_time
			return obj;
		})
		const rowSelection = {};
		return (
			<div className="checkin">
				<div className="check_list">
					<Row>
						<Button type="primary" onClick={this.showModal}>
							新建签到
							<Icon type="plus-circle-o" />
						</Button>
						<Button type="primary" onClick={this.delItem}>
							删除
							<Icon type="delete" />
						</Button>
						<Modal 
							title="新建会议签到"
							visible={this.state.visible}
							onOk={this.handleSubmit}
							onCancel={this.handleCancel}
						>
							<WrappedNewCheckinForm />
						</Modal>
					</Row>
					<Row>
						<Table 
							columns={columns}
							dataSource={data}
							rowSelection={rowSelection}
							bordered
							pagination={{ pageSize: 5 }}
							size="middle"
						/>
					</Row>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	new_checkin_info: state.getIn(['checkin', 'new_checkin']).toJS(),
	list: state.getIn(['checkin', 'checkin_list']).toJS(),
});

const mapDispatchToProps = (dispatch) => ({
	set_checkin_list: (list) => dispatch( AC.checkin_list(list)),
	insert_checkin: (item) => dispatch( AC.unshift_checkin(item) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckinList);