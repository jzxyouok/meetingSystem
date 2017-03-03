import React, {Component} from 'react';
import {Button, Table, Glyphicon} from 'react-bootstrap';
import AttendFooter from './AttendFooter';
import AttendFilter from './AttendFilter';

class AllAttend extends Component {
	render() {
		return (
			<div className="allattend">
				<AttendFilter />
				<div className="attendeeHandle">
					<Button>添加参会者</Button>
					<Button>导入</Button>
					<Button>导出</Button>
				</div>
				<div className="handle">
					<span>已选中0位参会人</span>
					<Button>发送通知</Button>
					<Button>设为签到</Button>
					<Button>设为未签到</Button>
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

export default AllAttend;