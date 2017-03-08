import React, {Component} from 'react';

class CustomOpt extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const {operation} = this.props;
		console.log(operation);
	}
	render() {
		const {name} = this.props;
		return (
			<li><a href="javscript:;" onClick={this.handleClick}>{name}</a></li>
		)
	}
}

export default CustomOpt;