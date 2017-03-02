import React, {Component} from 'react';
import {Glyphicon, Tabs, Tab, DropdownButton, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router';
import '../../scss/admin/HeaderTool.scss';

const tooltip = (text) => (
	<Tooltip id="tooltip" positionLeft={100}><strong>{text}</strong></Tooltip>
);

class HeaderTool extends Component {
	render() {
		return (
			<div className="headertool">
				<div className="userinfo">
					<Glyphicon glyph="user" />
					{' '}
					<span className="username">聂桓</span>
					<Glyphicon glyph="chevron-down" />
					<div className="dropDownHandler">
						<Link to="#">退出</Link>
						<Link to="#">关于</Link>
					</div>
				</div>
				<OverlayTrigger placement="bottom" overlay={tooltip('意见反馈')}>
					<Link to="#" className="feedback"><Glyphicon glyph="envelope" /></Link>
				</OverlayTrigger>
				<OverlayTrigger placement="bottom" overlay={tooltip('系统通知')}>
					<Link to="#" className="notice"><Glyphicon glyph="exclamation-sign" /></Link>
				</OverlayTrigger>
			</div>
		)
	}
}

export default HeaderTool;