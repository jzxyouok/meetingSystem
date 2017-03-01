import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

import '../../scss/admin/actList.scss';

export default class ActList extends Component {
	render() {
		return (
			<div className="actList clearfix">
				<div className="actState pull-left">
					<input type="checkbox"/>
				</div>
				<div className="actImg pull-left">
					<img src="http://file.31huiyi.com/Uploads/neweventLogos/502.jpg" alt=""/>
				</div>
				<div className="actInfo pull-left">
					<h3>活动标题 <span className="actId">(活动ID:516064982)</span></h3>
					<p>
						<span className="actEndTime"><Glyphicon glyph="time" />截止时间：2016-11-27 12:00</span>
						<span className="actAddress"><Glyphicon glyph="record" />广州香格里拉大酒店</span>
					</p>
					<p>
						<span className="actTime">• 报名时间：2016-11-11 09：56 - 2016-11-15 09：56</span>
						<span className="publisher">• 发布者: 聂桓</span>
						<span className="actNumber">• 参会人数：126</span>
					</p>
					<div className="operator">
						<Link to="#"><Glyphicon glyph="list" />基本信息</Link>
						<Link to="#"><Glyphicon glyph="user" />参会者管理</Link>
						<Link to="#"><Glyphicon glyph="cog" />门票设置</Link>
						<Link to="#"><Glyphicon glyph="th-list" />订单管理</Link>
						<Link to="#"><Glyphicon glyph="edit" />统计报表</Link>
						<Link to="#"><Glyphicon glyph="trash" />移除分类</Link>
						<Link to="#"><Glyphicon glyph="tags" />标签设置</Link>
					</div>
				</div>
				<div className="manager pull-right">
					<button>管理</button>
				</div>
			</div>
		)
	}
}