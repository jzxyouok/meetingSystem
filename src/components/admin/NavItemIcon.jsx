import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from '../../scss/admin/admin.scss';

class NavItemIcon extends Component {
	render() {
		const {iconName} = this.props;
		return <span className={`${styles.iconfont}`} styleName={iconName}></span>
	}
}

export default CSSModules(NavItemIcon, styles);