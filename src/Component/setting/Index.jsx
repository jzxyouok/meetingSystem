import React, { Component } from 'react';
import { Tabs } from 'antd';

import '../../Style/setting.scss';

const TabPane = Tabs.TabPane;

export default class Setting extends Component {
	render() {
		return (
			<div className="setting">
				<Tabs>
					<TabPane tab="会议席位安排" key="1"><p>会议席位安排</p></TabPane>
					<TabPane tab="酒店住宿安排" key="2"><p>酒店住宿安排</p></TabPane>
					<TabPane tab="宴会座位安排" key="3"><p>宴会座位安排</p></TabPane>
					<TabPane tab="活动详情信息" key="4"><p>活动详情信息</p></TabPane>
				</Tabs>
			</div>
		)
	}
}