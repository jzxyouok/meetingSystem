import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';

class AttendFooter extends Component {
	render() {
		return (
			<div className="attendfooter clearfix">
				<div className="pageShowNum pull-left">
					<span>每页显示</span>
					<select>
						<option value="1">5</option>
						<option value="1">10</option>
					</select>
					<span>条</span>
				</div>
				<Pagination
					className="pull-right"
			        prev
			        next
			        first
			        last
			        ellipsis
			        boundaryLinks
			        items={5}
			        maxButtons={5}
			        activePage={1}
				/>
			</div>
		)
	}
}

export default AttendFooter;