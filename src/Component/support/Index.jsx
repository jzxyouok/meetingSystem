import React, { Component } from 'react';
import { Tabs } from 'antd';

import '../../Style/support.scss';

const TabPane = Tabs.TabPane;

export default class Support extends Component {
	render() {
		return (
			<div className="support">
				<Tabs>
					<TabPane tab="功能模块" key="1">
						<p>功能模块</p>
					</TabPane>
					<TabPane tab="每日议程" key="2">
						<p>每日议程</p>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}