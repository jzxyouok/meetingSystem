import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ActItem extends Component {
	render() {
		const {address, end_time, id, image, publisher, registertime, state, title} = this.props;
		return (
			<div className="actItem">
				<div className="actState">
					<input type="checkbox"/>
				</div>
				<div className="actImg">
					<img src={image} alt="会议封面"/>
				</div>
				<div className="actInfo">
					<h3>{title} <span className="actId">(会议ID:{id})</span></h3>
					<p>
						<span className="actEndTime">截止时间：{end_time}</span>
						<span className="actAddress">{address}</span>
					</p>
					<p>
						<span className="actTime">• 报名时间：{registertime}</span>
						<span className="publisher">• 发布者: {publisher}</span>
						<span className="actNumber">• 参会人数：126</span>
					</p>
					<div className="operator">
						<Link to={`/baseInfo/${id}`}><span className="iconfont icon-jibenxinxi"></span>基本信息</Link>
						<Link to={`/attendee/${id}`}><span className="iconfont icon-renyuan"></span>参会者管理</Link>
					</div>
				</div>
				<div className="manager">
					<button>管理</button>
				</div>
			</div>
		)
	}
}