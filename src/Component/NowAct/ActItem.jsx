import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ActItem extends Component {
	render() {
		return (
			<div className="actItem">
				<div className="actState">
					<input type="checkbox"/>
				</div>
				<div className="actImg">
					<img src="http://file.31huiyi.com/Uploads/neweventLogos/502.jpg" alt=""/>
				</div>
				<div className="actInfo">
					<h3>活动标题 <span className="actId">(活动ID:516064982)</span></h3>
					<p>
						<span className="actEndTime">截止时间：2016-11-27 12:00</span>
						<span className="actAddress">广州香格里拉大酒店</span>
					</p>
					<p>
						<span className="actTime">• 报名时间：2016-11-11 09：56 - 2016-11-15 09：56</span>
						<span className="publisher">• 发布者: 聂桓</span>
						<span className="actNumber">• 参会人数：126</span>
					</p>
					<div className="operator">
						<Link to="#"><span className="iconfont icon-jibenxinxi"></span>基本信息</Link>
						<Link to="#"><span className="iconfont icon-renyuan"></span>参会者管理</Link>
					</div>
				</div>
				<div className="manager">
					<button>管理</button>
				</div>
			</div>
		)
	}
}