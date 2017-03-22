import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout, Icon, Menu, Dropdown } from 'antd';

import './index.scss';

const { Header, Sider, Content, Footer } = Layout;
const MenuItem = Menu.item;

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

class Home extends Component {
	state = {
		collapsed: true
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	render() {
		return (
			<Layout className="meeting-app">
				<Sider 
					className="nav"
					collapsible
					trigger={null}
					collapsed={this.state.collapsed}
					>
					<div className="logo">
						<img src="https://mail.midea.com/coremail/s?sid=GAwAjHookkdDyHCIFgooabhLNCzGKlLp&func=getInsidePageLogoData" alt="logo"/>
					</div>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="file-text" />
							<span className="nav-text">会议列表</span>
						</Menu.Item>	
						<Menu.Item key="2">
							<Icon type="file-add" />
							<span className="nav-text">创建会议</span>
						</Menu.Item>	
					</Menu>
				</Sider>
				<Layout>
					<Header>
						<Icon 
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
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
					<Content>content</Content>
				</Layout>
			</Layout>
		)
	}
}

render(<Home />, document.getElementById('app'));