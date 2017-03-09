import React, {Component} from 'react';
import $ from 'jquery';
class Option extends Component {
	handleDel(e) {
		let inputIndex = $(e.target).parents('.frow').index(); 	// 表单的第几题
		let optIndex = $(e.target).parent().index() - 1;		// 这道题的第几个选项
		const {delOption} = this.props;
		console.log(inputIndex, optIndex);
		delOption(inputIndex, optIndex);

	}
	handleOptChange(e) {
		let inputIndex = $(e.target).parents('.frow').index();
		let optIndex = $(e.target).parent().index() - 1;
		console.log(inputIndex, optIndex);
		let value = e.target.value;
		const {changeOption} = this.props;
		changeOption(inputIndex, optIndex, value);
	}
	render() {
		const {text} = this.props;
		return (
			<div className="choice">
				<input type="checkbox" readOnly disabled />
				<span className="iconfont icon-del2" onClick={this.handleDel.bind(this)}></span>
				<input type="text" className="finput" value={text} onChange={this.handleOptChange.bind(this)}/>
			</div>
		)
	}
}
export default Option;