import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';

import { get_date } from '../../Resource/util/utils';

export default class MeetingItem extends Component {
	render() {
		const { address, end_time, id, image, publisher, registertime, state, title} = this.props;
		let state_des = '';
		if(state == 0) {
			state_des = '未发布';
		} else {
			if(get_date() > end_time) {
				state_des = '已结束';
			} else {
				state_des = '进行中';
			}
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
						<span className="actEndTime">结束时间：{end_time}</span>
						<span className="actAddress">{address}</span>
					</p>
					<p>
						<span className="actTime">• 报名时间：{registertime}</span>
						<span className="publisher">• 发布者: {publisher}</span>
						<span className="actNumber">• 参会人数：126</span>
					</p>
					<div className="operator">
						<Link to={`/${id}/baseInfo`}><Icon type="file-text" />基本信息</Link>
						<Link to={`/${id}/attendee`}><Icon type="user" />参会者管理</Link>
					</div>
				</div>
				<div className="manager">
					<Link to={`/${id}/baseInfo`}>管理</Link>
				</div>
			</div>
		)
	}
}