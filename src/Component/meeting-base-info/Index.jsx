import React, { Component } 	from 'react';
import { connect } 				from 'react-redux';
import fetch 					from 'isomorphic-fetch';
import { message } 				from 'antd';

import CreateMeeting 			from '../create-meeting/Index';
import { getMeetingBase } 		from '../../Config/apiUrl';

class BaseInfo extends Component {
	componentDidMount() {
		const id = this.props.params.id;
		const { get_form_state } = this.props;
		console.log(id)
		get_form_state(id);
	}

	render() {
		return <CreateMeeting />
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	get_form_state: (id) => dispatch(() => {
		fetch(`${getMeetingBase}?id=${id}`)
			.then(res => res.json())
			.then(res => console.log(res))
			.catch(err => message.error('网络错误请稍后重试或者联系管理员解决'));
	})
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BaseInfo);
