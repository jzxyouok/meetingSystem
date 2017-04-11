import React, {Component} 		from 'react';
import { Row, Col, Table, Select, Icon, Button, message, Input, Modal, Radio } 
								from 'antd';
import { connect } 				from 'react-redux';
import { getCheckinDetails, changeCheckinStatus } 	
								from '../../Config/apiUrl';
import * as AC 					from '../../Redux/Action/checkin.action';

const Option = Select.Option,
	  RadioGroup = Radio.Group;

class CheckDetail extends Component{
	// 组件状态
	state = {
		phoneFilter: '',
		filtered: false,
		filterDropdownVisible: false,
		editVisible: false,
		editPersonCheckin: 0,
	}

	// 电话号码改变时改变状态
	phoneFilterChange = (e) => {
		this.setState({
			phoneFilter: e.target.value
		})
	}

	// 组件加载完成去请求签到人员数据
	componentDidMount() {
		const { id, qid } = this.props.params;
		this.props.getDetails(id, qid);
	}
	
	// 按电话号码收索
	phoneSearch = () => {
		const { phoneFilter } = this.state;
		this.setState({
			filterDropdownVisible: false,
      		filtered: !!phoneFilter,
		});
		const filteredDetails = this.props.details.filter(item => item.phone.indexOf(phoneFilter) !== -1);
		this.props.handleFilterDetails( filteredDetails );
	}

	// 返回签到列表
	reList = () => {
		history.go(-1);
	}

	// 编辑用户的签到状态
	itemEdit = (key) => {
		const editPerson = this.props.details.filter(item => item.openid === key);
		this.props.editPerson(editPerson[0]);
		this.setState({
			editVisible: true
		})
	}

	// 关闭编辑用户的模态框
	closeEdit = () => {
		this.setState({
			editVisible: false,
		})
	}

	// 改变正在编辑用户的签到状态
	changeEditPersonCheckin = (openid) => {
		this.props.changeCheckinStatus(openid);
	}

	// 提交正在编辑人员的签到信息
	submitStatus = (openid) => {
		const qid = this.props.params.qid;
		const action_id = this.props.params.id;
		this.props.submitStatus(qid, action_id, openid);
	}

	// 短信通知给指定的人
	notification = () => {

	}

	render() {
		const check_columns = [
			{
				title: '姓名', 
				dataIndex: 'name', 
				key: 'name'
			},{
				title: '手机', 
				dataIndex: 'tel', 
				key: 'tel',
				filterDropdown: (
					<div className="custom-filter-dropdown">
						<Input
							ref={ele => this.searchInput = ele}
							placeholder="Search name"
							value={this.state.phoneFilter}
							onChange={this.phoneFilterChange}
							onPressEnter={this.phoneSearch}
						/>
						<Button type="primary" onClick={this.phoneSearch}>Search</Button>
					</div>
				),
				filterIcon: <Icon type="phone" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
				filterDropdownVisible: this.state.filterDropdownVisible,
				onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }, () => this.searchInput.focus())
			},{
				title: '状态', 
				dataIndex: 'status', 
				key: 'status',
				filters: [{
					text: '已签到',
					value: '已签到'
				},{
					text: '未签到',
					value: '未签到'
				}],
				filterMultiple: false,
				onFilter: (value, record) => record.status === value
			},{
				title: '签到时间', 
				dataIndex: 'time', 
				key: 'time'
			},{
				title: '操作', 
				dataIndex: 'handle', 
				key: 'handle',
				render: (text, record) => (
					<div className="handler">
						<Icon data-openid={record.key} type="edit" onClick={this.itemEdit.bind(this, record.key)} />
						<Icon data-openid={record.key} type="notification" onClick={this.notification.bind(this, record.key)} />
					</div>
				)
			}
		];
		const check_data = this.props.filterDetails.map(item => ({
			key: item.openid,
			name: item.username,
			tel: item.phone,
			status: item.status === '1' ? '已签到' : '未签到',
			time: item.load_time
		}));

		const { username, phone, status, openid } = this.props.editPersonInfo;
		const edit_username = username ? username : '';
		const edit_phone    = phone    ? phone : '';
		const edit_status   = status === '1'   ? 1 : 0;

		return (
			<div className="check_detail">
				<Modal className="edit-modal" title="编辑" visible={this.state.editVisible} onCancel={this.closeEdit} onOk={this.submitStatus.bind(this, openid)}>
					<Row>
						<Col span={4}>姓名</Col>
						<Col span={20}><Input value={edit_username} disabled={true} /></Col>
					</Row>
					<Row>
						<Col span={4}>手机号</Col>
						<Col span={20}><Input value={edit_phone} disabled={true} /></Col>
					</Row>
					<Row>
						<Col span={4}>签到状态</Col>
						<Col span={20} className="checkin-status">
							<RadioGroup 
								value={edit_status} 
								onChange={this.changeEditPersonCheckin.bind(this)}>
								<Radio value={0}>未签到</Radio>
								<Radio value={1}>已签到</Radio>
							</RadioGroup>
						</Col>
					</Row>
				</Modal>
				<Row>
					<h2 className="check_detail_title">{this.props.title}</h2>
					<Col span={4} className="total-num">总人数: {this.props.checkNum}</Col>
					<Col span={20} className="re-list">
						<a href="javascript:;" onClick={this.reList} className="ant-btn ant-btn-default">返回签到列表 <Icon type="rollback" /></a>
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
		)
	}
}

const mapStateToProps = (state) => ({
	details: state.getIn(['checkin', 'checkin_details']).toJS(),
	filterDetails: state.getIn(['checkin', 'filter_checkin_details']).toJS(),
	showOid: state.getIn(['checkin', 'show_oid']),
	checkNum: state.getIn(['checkin', 'total_num_title', 'num']),
	title: state.getIn(['checkin', 'total_num_title', 'title']),
	editPersonInfo: state.getIn(['checkin', 'edit_person']).toJS(),
});

const mapDispatchToProps = (dispatch) => ({
	getDetails: (id, oid) => dispatch(() => {
		fetch(`${getCheckinDetails}?sid=${id}&qid=${oid}`)
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				const { data, count, name } = res.message;
				dispatch( AC.checkin_details(data) );
				dispatch( AC.filter_checkin_details(data) );
				dispatch( AC.total_num_title(count, name) );
			} else {
				message.warn('目前没有签到数据');
			}
		})
		.catch(err => message.error('网络错误，请稍后重试或联系管理员处理'));
	}),
	handleFilterDetails: (v) => dispatch( AC.filter_checkin_details(v) ),
	editPerson: (p) => dispatch( AC.edit_person(p) ),
	changeCheckinStatus: () => dispatch( AC.change_checkin_status ),
	submitStatus: (qid, action_id, openid) => dispatch( () => {
		fetch(changeCheckinStatus, {
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			},
			body: `qid=${qid}&action_id=${action_id}&openid=${openid}`
		})
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				message.success(res.message);
				setTimeout(() => location.reload(), 2000);
			} else {
				message.warn(res.message);
			}
		})
		.catch(err => message.error('网络错误，请稍后重试，或联系管理员解决'));
	}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckDetail);