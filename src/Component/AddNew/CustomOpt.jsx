import React, {Component} from 'react';

class CustomOpt extends Component {
	render() {
		const {name} = this.props;
		return (
			<li><a href="#">{name}</a></li>
		)
	}
}

export default CustomOpt;