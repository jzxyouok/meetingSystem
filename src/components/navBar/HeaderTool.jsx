import React, {Component} from 'react';
import {Glyphicon, Tabs, Tab, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router';
import '../../scss/admin/HeaderTool.scss';

class HeaderTool extends Component {
	render() {
		return (
			<div className="headertool">
				<div className="userinfo">
					<Glyphicon glyph="envelope" />
					{' '}
					<span className="username">聂桓</span>
					<Glyphicon glyph="chevron-down" />
					<div className="dropDownHandler">
						<Link to="#">退出</Link>
						<Link to="#">关于</Link>
					</div>
				</div>
				<Glyphicon glyph="envelope" />
				<Glyphicon glyph="user" />
			</div>
		)
	}
}

export default HeaderTool;