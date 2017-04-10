import React, { Component } 	from 'react';
import { Row, Col, Modal, Table, Button, Icon, message, Popconfirm } 
								from 'antd';
import { connect } 				from 'react-redux';
import fetch 					from 'isomorphic-fetch';
import WrappedNewCheckinForm 	from './add-check-form';
import * as AC 					from '../../Redux/Action/checkin.action';
import { addCheckin, getCheckin, delCheckin }
					 			from '../../Config/apiUrl';

const columns = [
	{title: '序号', dataIndex: 'oid', key: 'oid'},
	{title: '签到主题', dataIndex: 'name', key: 'name'},
	{title: '二维码', dataIndex: 'QRcode_url', key: 'QRcode_url'},
	{title: '过期时间', dataIndex: 'expire_time', key: 'expire_time'},
	{title: '创建时间', dataIndex: 'load_time', key: 'load_time'},
];

class CheckinList extends Component {
	state = {
		visible: false,
		qrcodeVisible: false,
		qrcodeUrl: ''
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
		if(this.props.delOids.length === 0) {
			message.warn('请选择需要删除的签到项');
			return;
		}
		fetch(delCheckin, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `sid=${this.props.id}&oid=${JSON.stringify(this.props.delOids)}`
		})
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				this.props.set_checkin_list(res.message);
			} else {
				message.warn('删除失败');
			}
		})
		.catch(err => console.error(err));
	}

	// 展示二维码模态框
	showQRCode = (e) => {
		this.setState({
			qrcodeUrl: e.target.src,
			qrcodeVisible: true
		});
	}

	// 关闭二维码模态框
	closeQRCode = (e) => {
		this.setState({
			qrcodeVisible: false
		})
	}

	// 下载二维码
	downloadQRCode = () => {
		const oA = document.createElement('a');
		oA.href = this.state.qrcodeUrl;
		oA.download = 'qr_code.jpg';
		oA.style.display = 'none';
		document.body.appendChild(oA);
		oA.addEventListener('click', () => console.log('downloading...'));
		// 模拟点击事件
		oA.click();
		// 关闭模态框
		this.setState({
			qrcodeVisible: false
		});
	}

	// 显示签到详情
	showDetails = (e) => {
		this.props.toggleShow();
		this.props.change_show_oid(e.target.dataset.oid);
	}

	render() {
		const checkin_list = this.props.list;
		const data = checkin_list.map((item, index) => {
			const { oid, qrcode_url, load_time, expire_time, name } = item;
			let obj = {};
			obj.key = oid;
			obj.name = <a data-oid={oid} onClick={this.showDetails} href="javscript:;">{name}</a>;
			obj.oid = index+1;
			obj.QRcode_url = <img onClick={this.showQRCode} src={`http://www.cfdq.midea.com/meeting/Uploads/qrcode/${qrcode_url}`} style={{width: '30px'}} />, 
			obj.load_time = load_time,
			obj.expire_time = expire_time
			return obj;
		})
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				const oid = selectedRows.map(item => item.key);
				this.props.del_oid(oid);
			}
		};
		return (
			<div className="checkin">
				<Modal
					visible={this.state.qrcodeVisible}
					title="二维码详情"
					okText="点击下载"
					onOk={this.downloadQRCode}
					onCancel={this.closeQRCode}>
					<div className="qrcode-img">
						<img src={this.state.qrcodeUrl} alt="二维码"/>
					</div>
				</Modal>
				<div className="check_list">
					<Row>
						<Button type="primary" onClick={this.showModal}>
							新建签到
							<Icon type="plus-circle-o" />
						</Button>
						<Popconfirm 
							title="确定要删除这些签到项吗"
							onConfirm={this.delItem}
							okText='确定'
							cancelText='取消' >
							<Button type="primary">
								删除
								<Icon type="delete" />
							</Button>
						</Popconfirm>
						<Modal 
							title 	="新建会议签到"
							visible ={this.state.visible}
							onOk 	={this.handleSubmit}
							onCancel={this.handleCancel}
						>
							<WrappedNewCheckinForm />
						</Modal>
					</Row>
					<Row>
						<Table 
							columns 	={columns}
							dataSource 	={data}
							rowSelection={rowSelection}
							pagination 	={{ pageSize: 5 }}
							size 		="middle"
							bordered
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
	delOids: state.getIn(['checkin', 'del_oid']).toJS(),
	showOid: state.getIn(['checkin', 'show_oid']),
});

const mapDispatchToProps = (dispatch) => ({
	set_checkin_list: (list) => dispatch( AC.checkin_list(list)),
	insert_checkin: (item) => dispatch( AC.unshift_checkin(item) ),
	del_oid: (oids) => dispatch( AC.del_oid(oids) ),
	change_show_oid: (oid) => dispatch( AC.show_oid(oid) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckinList);