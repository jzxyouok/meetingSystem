import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
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
		)
	}
}