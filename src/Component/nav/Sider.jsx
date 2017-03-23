import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router'; 

const { Sider } = Layout;

export default class SiderBar extends Component {
	render() {
		const { collapsed } = this.props;
		return (
			<Sider
				className="nav"
				collapsible
				trigger={null}
				collapsed={collapsed}
				>
				<div className="logo">
					<img src="https://mail.midea.com/coremail/s?sid=GAwAjHookkdDyHCIFgooabhLNCzGKlLp&func=getInsidePageLogoData" alt="logo"/>
				</div>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}>
					<Menu.Item key="1">
						<Link to="/meeting-list">
							<Icon type="file-text" />
							<span className="nav-text">会议列表</span>
						</Link>
					</Menu.Item>	
					<Menu.Item key="2">
						<Link to="/create-meeting">
							<Icon type="file-add" />
							<span className="nav-text">创建会议</span>
						</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		)
	}
}
