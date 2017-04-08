import React, { Component } from 'react';
import { Button, Row, Col, Icon, Modal, Form, Input, DatePicker, Table, Select } from 'antd';

import CheckinList from './check-list';
import CheckDetail from './check-detail';
import '../../Style/checkin.scss';

const Option = Select.Option;

export default class Checkin extends Component {
	render() {
		return (
			<div className="checkin">
				<CheckinList id={this.props.params.id} />
				<CheckDetail />
			</div>
		)
	}
}