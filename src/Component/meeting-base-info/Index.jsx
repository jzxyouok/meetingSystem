import React, { Component } 	from 'react';
import { connect } 				from 'react-redux';
import fetch 					from 'isomorphic-fetch';
import { message } 				from 'antd';

import CreateMeeting 			from './meeting-info';
import { getMeetingBase } 		from '../../Config/apiUrl';
import * as actions 			from '../../Redux/Action/meeting-base-info.action';

class BaseInfo extends Component {
	componentDidMount() {
		const id = this.props.params.id;
		const { get_form_state } = this.props;
		get_form_state(id);
	}

	render() {
		const id = this.props.params.id;
		return <CreateMeeting id={id} />
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	get_form_state: (id) => dispatch(() => {
		fetch(`${getMeetingBase}?id=${id}`)
			.then(res => res.json())
			.then(res => {
				if(res.code === 1) {
					dispatch( actions.init_form(res.message) );
					dispatch( actions.update_title(res.message.title) );
					dispatch( actions.update_reg_time(res.message.reg_time) );
					dispatch( actions.update_meeting_time(res.message.meeting_time) );
					dispatch( actions.update_address(res.message.address) );
					dispatch( actions.update_detail_address(res.message.detail_address) );
					dispatch( actions.update_official(res.message.official) );
					dispatch( actions.update_type(res.message.category) );
					dispatch( actions.update_details(res.message.details) );
					dispatch( actions.update_poster(res.message.image) );
				} else {
					message.warn(res.message);
				}
			})
			.catch(err => message.error('网络错误请稍后重试或者联系管理员解决'));
	})
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BaseInfo);
