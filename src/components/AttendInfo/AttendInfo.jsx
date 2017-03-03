import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import '../../scss/admin/AttendInfo.scss';
import AllAttend from './AllAttend';
import NoVerify from './NoVerify';

class AttendInfo extends Component {
	render() {
		return (
			<div className="addtendInfo">
				<h3>参会者名单</h3>
				<Tabs defaultActiveKey={1} animation={true} id="tabs">
					<Tab eventKey={1} title="参会人员名单（126）">
						<AllAttend />
					</Tab>
					<Tab eventKey={2} title="未审核人员">
						<NoVerify />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

export default AttendInfo;