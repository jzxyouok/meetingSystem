import React, {Component} from 'react';

class CommonOpt extends Component {
	render() {
		const {name} = this.props;
		return (
			<a href="#">{name}</a>
		)
	}
}

export default CommonOpt;