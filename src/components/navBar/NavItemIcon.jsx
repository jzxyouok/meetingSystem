import React, {Component} from 'react';

import '../../scss/admin/admin.scss';

export default class NavItemIcon extends Component {
	render() {
		const {iconName} = this.props;
		return <span className={`iconfont ${iconName}`}></span>
	}
}
