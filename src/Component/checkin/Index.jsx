import React, { Component } from 'react';
import { Button, Row, Col, Icon, Modal, Form, Input, DatePicker, Table, Select } from 'antd';

import CheckinList from './check-list';
import CheckDetail from './check-detail';
import '../../Style/checkin.scss';

const Option = Select.Option;

export default class Checkin extends Component {
	state = {
		isListShow: true,
		isDetailsShow: false,
	}
	toggleShow = () => {
		this.setState({
			isListShow: !this.state.isListShow,
			isDetailsShow: !this.state.isDetailsShow,
		})
	}
	changeQid = (qid) => {
		this.setState({
			qid,
		})
	}
	render() {
		const {id} = this.props.params;
		return (
			<div className="checkin">
				{this.state.isListShow ? <CheckinList id={id} toggleShow={this.toggleShow} /> : ''}
				{this.state.isDetailsShow ? <CheckDetail id={id} toggleShow={this.toggleShow} /> : ''}
			</div>
		)
	}
}