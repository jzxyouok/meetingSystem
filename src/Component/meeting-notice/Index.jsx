import React, { Component } from 'react';
import { Tabs } from 'antd';

import SMSNotice from './sms-notice';
import '../../Style/meeting-notice.scss';

const TabPane = Tabs.TabPane;

export default class MeetingNotice extends Component {
	render() {
		return (
			<div className="meeting-notice">
				<Tabs>
					<TabPane tab="短信通知" key="1">
						<SMSNotice />
					</TabPane>
					<TabPane tab="微信通知" key="2">
						<p>本模块正在建设中</p>
					</TabPane>
					<TabPane tab="邮件通知" key="3">
						<p>本模块正在建设中</p>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}