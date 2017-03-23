import React, { Component } from 'react';
import { Layout, Icon, Dropdown, Menu } from 'antd';

const { Header } = Layout;

const menu = (
	<Menu>
		<Menu.Item>
			<a href="javascript:;">个人中心</a>
		</Menu.Item>
		<Menu.Item>
			<a href="javascript:;">退出登录</a>
		</Menu.Item>
	</Menu>
);

export default class HeaderBar extends Component {
	render() {
		const { collapsed, toggle } = this.props;
		return (
			<Header>
				<Icon 
					className="trigger"
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/>
				<div className="user-info">
					<span className="head-img">A</span>
					<Dropdown overlay={menu}>
						<span className="username">
					      	Admin <Icon type="down" />
					    </span>
					</Dropdown>
				</div>
			</Header>
		)
	}
}