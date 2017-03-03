import React, {Component} from 'react';
import {Button, Table, Glyphicon} from 'react-bootstrap';
import AttendFooter from './AttendFooter';
import AttendFilter from './AttendFilter';

class NoVerify extends Component {
	render() {
		return (
			<div className="noVerify">
				<AttendFilter />
				<div className="attendeeHandle">
					<Button>导出</Button>
				</div>
				<div className="handle clearfix">
					<div className="verify pull-left">
						<span>已选择条数</span>
						<Button>批量审核</Button>
					</div>
					<div className="noVerifyNum pull-right">
						<span>未审核数 0</span>
						<span>总人数 100</span>
					</div>
				</div>
				<Table bordered condensed hover>
					<thead>
						<tr>
							<th><input type="checkbox" /></th>
							<th>姓名</th>
							<th>手机</th>
							<th>公司</th>
							<th>职位</th>
							<th>签到码</th>
							<th>签到时间</th>
							<th>是否签到</th>
							<th>报名时间</th>
							<th>送站车辆时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="checkbox" /></td>
							<td>admin</td>
							<td>13000000000</td>
							<td>厨电本部</td>
							<td>总经理</td>
							<td>000000</td>
							<td>2017-02-13 09：23</td>
							<td>是</td>
							<td>2017-02-13 09：23</td>
							<td>07：00</td>
							<td>
								<Glyphicon glyph="edit" />
								<Glyphicon glyph="trash" />
							</td>
						</tr>
					</tbody>
				</Table>
				<AttendFooter />
			</div>
		)
	}
}

export default NoVerify;