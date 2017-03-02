import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Pagination} from 'react-bootstrap';
import '../../scss/admin/PageControl.scss';

class PageControl extends Component {
	render() {
		return (
			<div className="pageControl clearfix">
				<div className="pageShowNum">
					<span>每页显示</span>
					<select>
						<option value="10">10</option>
	        			<option value="20">20</option>
					</select>
				</div>
				<div className="nowpage">
					<Pagination 
	      				prev
	      				next
	      				first
	      				last
	      				ellipsis
	      				boundaryLinks
	      				items={1}
	      				maxButtons={2}
	      				activePage={1} />
				</div>
			</div>
		)
	}
}

export default PageControl;