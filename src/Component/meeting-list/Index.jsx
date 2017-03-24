import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { message } from 'antd';

import MeetingItem from './meeting-item';
import { update_meeting_list } from '../../Redux/Action/meeting-list.action';
import { getActList } from '../../Config/apiUrl';
import { err_alert } from '../common/common';
import '../../Style/meeting-list.scss';

class MeetingList extends Component {
	componentDidMount() {
		const { get_meeting_list } = this.props;
		get_meeting_list();
	}
	render() {
		const { list } = this.props;
		return (
			<div className="meeting-list">
				{
					list.map((item, idx) => <MeetingItem {...item} key={idx} />)
				}
			</div>
		)
	}
}

const mapPropsToState = (state) => ({
	list: state.getIn(['meeting_list', 'list']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
	get_meeting_list: () => dispatch(() => {
		fetch(getActList)
			.then(res => res.json())
			.then(res => {
				if(res.code === 1) {
					dispatch(update_meeting_list(res.message));
				} else {
					err_alert('网络错误，请稍后重试或联系管理员解决');
				}
			})
			.catch(err => err_alert(err));
	})
});

export default connect(
	mapPropsToState,
	mapDispatchToProps
)(MeetingList);