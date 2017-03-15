import React, {Component} from 'react';
import '../../Style/Attendee.scss';

export default class Attendee extends Component {
	render() {
		return (
			<div className="attendee">
				<div className="operate">
					<div className="attend_type">
						<div className="all active">参会人员(0)</div>
						<div className="no_check">未审核(0)</div>
					</div>
					<div className="in_output">
						<a href="javascript:;">添加参会人员</a>
						<a href="javascript:;">导出所有报名人员</a>
					</div>
				</div>
				<div className="search">
					<input className="search_text"/>
					<div className="condition">
						<label htmlFor="search_condition">搜索条件</label>
						<select id="search_condition">
							<option value="">搜索条件</option>
						</select>
						<label htmlFor="date">日期选择</label>
						<input type="date" className="begin_date"/>
						-
						<input type="date" className="end_date"/>
					</div>
					<div className="search_button">
						<button>搜索</button>
					</div>
				</div>
				<div className="attendee_table">
					<table>
						<thead>
							<tr>
								<th>序号</th>
								<th>姓名</th>
								<th>邮箱</th>
								<th>手机号</th>
								<th>门票类型</th>
								<th>购买渠道</th>
								<th>订单类型</th>
								<th>状态</th>
								<th>备注</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>guolizhi</td>
								<td>lznism@lznism.com</td>
								<td>18688254520</td>
								<td>免费票</td>
								<td>网购</td>
								<td>类型</td>
								<td>已付款</td>
								<td>备注</td>
							</tr>
							<tr>
								<td>1</td>
								<td>guolizhi</td>
								<td>lznism@lznism.com</td>
								<td>18688254520</td>
								<td>免费票</td>
								<td>网购</td>
								<td>类型</td>
								<td>已付款</td>
								<td>备注</td>
							</tr>
							<tr>
								<td>1</td>
								<td>guolizhi</td>
								<td>lznism@lznism.com</td>
								<td>18688254520</td>
								<td>免费票</td>
								<td>网购</td>
								<td>类型</td>
								<td>已付款</td>
								<td>备注</td>
							</tr>
						</tbody>
					</table>
					<div className="pagination">
						<a href="javascript:;" className="prev">上一页</a>
						<a href="javascript:;" className="next">下一页</a>
					</div>
				</div>
			</div>
		)
	}
}