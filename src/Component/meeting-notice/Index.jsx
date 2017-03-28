import React, { Component } from 'react';
import { Tabs } from 'antd';

import '../../Style/meeting-notice.scss';

const TabPane = Tabs.TabPane;

export default class MeetingNotice extends Component {
	render() {
		return (
			<div className="meeting-notice">
				<Tabs>
					<TabPane tab="短信通知" key="1">
						<p>短信通知</p>
					</TabPane>
					<TabPane tab="微信通知" key="2">
						<p>微信通知</p>
					</TabPane>
					<TabPane tab="邮件通知" key="3">
						<p>邮件通知</p>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}