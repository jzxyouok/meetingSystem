import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router'; 

const { Sider } = Layout;

export default class SiderBar extends Component {
	render() {
		const { collapsed, id } = this.props;
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
				{
					id ? (
						<Menu
							mode="inline"
							defaultSelectedKeys={['3']}>
							<Menu.Item key="3">
								<Link to="/:id/base-info">
									<Icon type="exception" />
									<span className="nav-text">基本信息</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to="/:id/register-form">
									<Icon type="schedule" />
									<span className="nav-text">报名表单</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="5">
								<Link to="/:id/attendee">
									<Icon type="user" />
									<span className="nav-text">参会人员</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="6">
								<Link to="/:id/checkin">
									<Icon type="key" />
									<span className="nav-text">会议签到</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="7">
								<Link to="/:id/setting">
									<Icon type="setting" />
									<span className="nav-text">会议设置</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="8">
								<Link to="/:id/support">
									<Icon type="smile" />
									<span className="nav-text">会议后勤</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="9">
								<Link to="/:id/notice">
									<Icon type="notification" />
									<span className="nav-text">会议通知</span>
								</Link>
							</Menu.Item>
						</Menu>
					) : (
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}>
							<Menu.Item key="1">
								<Link to="/meeting-list">
									<Icon type="file-add" />
									<span className="nav-text">会议列表</span>
								</Link>
							</Menu.Item>	
							<Menu.Item key="2">
								<Link to="/create-meeting">
									<Icon type="file-text" />
									<span className="nav-text">创建会议</span>
								</Link>
							</Menu.Item>
						</Menu>
					)
				}
				
			</Sider>
		)
	}
}
