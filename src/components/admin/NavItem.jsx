import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import {Link} from 'react-router';

import NavItemIcon from './NavItemIcon';
import styles from '../../scss/admin/admin.scss';

class NavItem extends Component {
	render() {
		const {description, iconFront, iconEnd, children, href, handleClick} = this.props;
		return <div styleName="item" onClick={handleClick}>
			<NavItemIcon iconName={iconFront} />
			{ href 
				? <Link to={href} styleName="description">{description}</Link> 
				: <span to={href} styleName="description">{description}</span>
			}{
			  iconEnd 
			  	? <NavItemIcon iconName={iconEnd} /> 
			  	: null
			}
		</div>
	}
}

export default CSSModules(NavItem, styles);