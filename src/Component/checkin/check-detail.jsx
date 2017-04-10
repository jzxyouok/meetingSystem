import React, {Component} 		from 'react';
import { Row, Col, Table, Select, Icon, Button, message, Input } 
								from 'antd';
import { connect } 				from 'react-redux';
import { getCheckinDetails } 	from '../../Config/apiUrl';
import * as AC 					from '../../Redux/Action/checkin.action';


const Option = Select.Option;

class CheckDetail extends Component{
	// 组件状态
	state = {
		phoneFilter: '',
		filtered: false,
		filterDropdownVisible: false,
	}

	// 电话号码改变时改变状态
	phoneFilterChange = (e) => {
		this.setState({
			phoneFilter: e.target.value
		})
	}

	// 组件加载完成去请求签到人员数据
	componentDidMount() {
		this.props.getDetails(this.props.id, this.props.showOid);
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
		this.props.toggleShow();
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
			}
		];
		const check_data = this.props.filterDetails.map(item => ({
			key: item.openid,
			name: item.username,
			tel: item.phone,
			status: item.status ? '已签到' : '未签到',
			time: item.load_time
		}));

		return (
			<div className="check_detail">
				<Row>
					<h2 className="check_detail_title">EDP人员信息</h2>
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
	checkNum: state.getIn(['checkin', 'checkin_num'])
});

const mapDispatchToProps = (dispatch) => ({
	getDetails: (id, oid) => dispatch(() => {
		fetch(`${getCheckinDetails}?sid=${id}&qid=${oid}`)
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				dispatch( AC.checkin_details(res.message.data) );
				dispatch( AC.filter_checkin_details(res.message.data) );
				dispatch( AC.total_num(res.message.count) );
			} else {
				message.warn('目前没有签到数据');
			}
		})
		.catch(err => message.error('网络错误，请稍后重试或联系管理员处理'));
	}),
	handleFilterDetails: (v) => dispatch( AC.filter_checkin_details(v) )
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckDetail);