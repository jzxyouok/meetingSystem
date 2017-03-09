import React, {Component} from 'react';

class CommonOpt extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		const {operation, addItem} = this.props;
		switch(operation) {
			case 'sex':
				addItem('sex', '请选择性别', 'radio', {
					'0': '男',
					'1': '女'
				});
				break;
			case 'photo':
				addItem('photo', '请上传您的照片', 'file');
				break;
			case 'type':
				addItem('meetingType', '请填写参会类型', 'text');
				break;
			case 'size':
				addItem('size', '请填写衣服尺寸', 'select', {
					'0': 'L',
					'1': 'S'
				});
				break;
			default:
				break;
		}
	}
	render() {
		const {name} = this.props;
		return (
			<a href="javascript:;" onClick={this.handleClick}>{name}</a>
		)
	}
}

export default CommonOpt;