import React, {Component} from 'react';

class CustomOpt extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const {operation, addItem} = this.props;
		switch(operation) {
			case 'addText':
				addItem('text'+Date.now(), '请添加题目标题', 'text');
				break;
			case 'addTextArea':
				addItem('textarea'+Date.now(), '请添加题目标题', 'textarea');
				break;
			case 'addDate':
				addItem('date'+Date.now(), '请添加题目标题', 'date');
				break;
			case 'addRadio':
				addItem('radio'+Date.now(), '请添加题目标题', 'radio', {'0': '请输入选项内容'});
				break;
			case 'addCheckbox':
				addItem('checkbox'+Date.now(), '请添加题目标题', 'checkbox', {'0': '请输入选项内容'});
				break;
			case 'addSelect':
				addItem('select'+Date.now(), '请添加题目标题', 'select', {'0': '请输入选项内容'});
				break;
			case 'addFile':
				addItem('file'+Date.now(), '请添加题目标题', 'file');
				break;
			default:
				break;
		}
	}
	render() {
		const {name} = this.props;
		return (
			<li><a href="javscript:;" onClick={this.handleClick}>{name}</a></li>
		)
	}
}

export default CustomOpt;