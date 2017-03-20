import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../Style/Sidebar.scss';

export default class Sidebar extends Component {
	render() {
		const logo = require('../../Resource/images/logo.png');
		const id = this.props.params.id;
		return (
			<div className="meetingSys">
				<div className="headbar">
					<div className="logo">
						<img src={logo} alt="logo"/>
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
					{
						id ? (
							<div className="sidebar">
								<div className="item">
									<span className="iconfont icon-renyuan"></span>
									<Link to={`/${id}/attendee`}>参会人员</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-biaodan"></span>
									<Link to={`/${id}/registerform`}>报名表单</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-jibenxinxi"></span>
									<Link to={`/${id}/baseInfo`}>基本信息</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-qiandao"></span>
									<Link to={`/${id}/checkin`}>签到信息</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-zongwuhouqin"></span>
									<Link to={`/${id}/support`}>后勤安排</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-shezhi"></span>
									<Link to={`/${id}/setting`}>会议设置</Link>
								</div>
							</div>
						) : (
							<div className="sidebar">
								<div className="item">
									<span className="iconfont icon-dangqianhuiyi"></span>
									<Link to="/nowAct">当前会议</Link>
								</div>
								<div className="item">
									<span className="iconfont icon-chuangjian"></span>
									<Link to="/newAct">创建会议</Link>
								</div>
							</div>
						)
					}
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}