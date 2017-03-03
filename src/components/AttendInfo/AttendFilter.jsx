import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class AttendFilter extends Component {
	render() {
		return (
			<div className="attendFilter">
				<div className="filter">
					<span>筛选条件</span>
					<select>
						<option value="name">姓名</option>
						<option value="sex">性别</option>
					</select>
					<input type="text"/>
				</div>
				<div className="filterBtn">
					<Button>筛选</Button>
				</div>
			</div>
		)
	}
}

export default AttendFilter;