import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

import NavItemIcon from './NavItemIcon';
import '../../scss/admin/admin.scss';

export default class NavItem extends Component {
	render() {
		const {description, iconFront, iconEnd, children, href, handleClick} = this.props;
		return <div className="item" onClick={handleClick}>
			<NavItemIcon iconName={iconFront} />
			{ href 
				? <Link to={href} className="description">{description}</Link> 
				: <span to={href} className="description">{description}</span>
			}{
			  iconEnd 
			  	? <NavItemIcon iconName={iconEnd} /> 
			  	: null
			}
		</div>
	}
}
