import React, { Component } from 'react';
import { Layout } from 'antd';

import SiderBar from './Sider';
import HeaderBar from './Header';
import '../../Style/nav.scss';

const { Header, Sider, Content, Footer } = Layout;

export default class Nav extends Component {
	state = {
		collapsed: true
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	render() {
		const { collapsed } = this.state;
		return (
			<Layout className="meeting-app ant-layout-has-sider">
				<SiderBar collapsed={collapsed} />
				<Layout>
					<HeaderBar
						collapsed={collapsed}
						toggle={this.toggle}
					/>
					<Content>{this.props.children}</Content>
				</Layout>
			</Layout>
		)
	}
}