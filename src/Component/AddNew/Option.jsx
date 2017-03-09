import React, {Component} from 'react';
class Option extends Component {
	render() {
		const {text} = this.props;
		return (
			<div className="choice">
				<input type="checkbox" readOnly disabled />
				<span className="iconfont icon-del2"></span>
				<input type="text" className="finput" defaultValue={text}/>
			</div>
		)
	}
}
export default Option;