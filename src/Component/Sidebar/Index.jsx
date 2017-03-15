import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../Style/Sidebar.scss';

export default class Sidebar extends Component {
	render() {
		return (
			<div className="meetingSys">
				<div className="headbar">
					<div className="logo">
						<img src="http://www.bagevent.com/resources/img/logo_index.png" alt="logo"/>
					</div>
					<div className="userInfo">
						<span className="headImg">A</span>
						<span className="username">
							Admin
							<span className="iconfont icon-xialajiantou"></span>
						</span>
					</div>
				</div>
				<div id="content">
					<div className="sidebar">
						<div className="item">
							<Link to="/nowAct">当前活动</Link>
						</div>
						<div className="item">
							<Link to="/newAct">创建活动</Link>
						</div>
					</div>
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}