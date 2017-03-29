import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';

export default class MeetingItem extends Component {
	render() {
		const { address, state ,end_time, meeting_time, id, image, publisher, reg_time , title} = this.props;
		let state_des = '';
		switch(state) {
			case '0':
				state_des = '未发布';
				break;
			case '1':
				state_des = '进行中';
				break;
			case '2':
				state_des = '已结束';
				break;
			default:
				break;
		}
		return (
			<div className="actItem">
				<div className="actState">
					<input type="checkbox"/>
					<p>{state_des}</p>
				</div>
				<div className="actImg">
					<img src={image} alt="会议封面"/>
				</div>
				<div className="actInfo">
					<h3>{title} <span className="actId">(会议ID:{id})</span></h3>
					<p>
						<span className="actEndTime">会议时间 {meeting_time}</span>
						<span className="actAddress">{address}</span>
					</p>
					<p>
						<span className="actTime">• 报名时间：{reg_time }</span>
						<span className="publisher">• 发布者: {publisher}</span>
						<span className="actNumber">• 参会人数：126</span>
					</p>
					<div className="operator">
						<Link to={`/${id}/base-info`}><Icon type="file-text" />基本信息</Link>
						<Link to={`/${id}/attendee`}><Icon type="user" />参会者管理</Link>
					</div>
				</div>
				<div className="manager">
					<Link to={`/${id}/base-info`}>管理</Link>
				</div>
			</div>
		)
	}
}