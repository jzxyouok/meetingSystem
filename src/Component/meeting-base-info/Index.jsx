import React, { Component } 	from 'react';
import { connect } 				from 'react-redux';
import fetch 					from 'isomorphic-fetch';
import { message } 				from 'antd';

import CreateMeeting 			from '../create-meeting/Index';
import { getMeetingBase } 		from '../../Config/apiUrl';
import { init_form } 			from '../../Redux/Action/create-meeting.action';

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
					console.log(res.message);
					// dispatch( init_form(res.message) );
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
