import React, {Component} from 'react';
import $ from 'jquery';
import Option from './Option';

export class Text extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.text').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.text').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.text').index();
		let childLen = $('.text').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.text').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.text').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title} = this.props;
		return (
			<div className="frow text">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					<input type="text" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class TextArea extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.textarea').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.textarea').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.textarea').index();
		let childLen = $('.textarea').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.textarea').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.textarea').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title} = this.props;
		return (
			<div className="frow textarea">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					<input type="textarea" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class Radio extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.radio').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.radio').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.radio').index();
		let childLen = $('.radio').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.radio').index();
		delFormItem(index);
	}
	handleAddOption(e) {
		e.preventDefault();
		let inputIndex = $(e.target).parents('.radio').index();
		let optIndex   = $(e.target).parent().siblings('.choice').length;
		const {addOption} = this.props;
		addOption(inputIndex, optIndex, '请输入选项的内容');
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.radio').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title, options, delOption, changeOption} = this.props;
		return (
			<div className="frow radio">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					{
						Object.entries(options).map(item => <Option text={item[1]} changeOption={changeOption} delOption={delOption} key={item[0]} />)
					}
					<div className="radioHandle">
						<a href="javascript:;" onClick={this.handleAddOption}>添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.checkbox').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.checkbox').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleAddOption(e) {
		e.preventDefault();
		let inputIndex = $(e.target).parents('.checkbox').index();
		let optIndex   = $(e.target).parent().siblings('.choice').length;
		const {addOption} = this.props;
		addOption(inputIndex, optIndex, '请输入选项的内容');
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.checkbox').index();
		let childLen = $('.checkbox').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.checkbox').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.checkbox').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title, options, delOption, changeOption} = this.props;
		return (
			<div className="frow checkbox">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					{
						Object.entries(options).map(item => <Option text={item[1]} changeOption={changeOption} delOption={delOption} key={item[0]} />)
					}
					<div className="checkboxHandle">
						<a href="javascript:;" onClick={this.handleAddOption}>添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class Select extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.select').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.select').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleAddOption(e) {
		e.preventDefault();
		let inputIndex = $(e.target).parents('.select').index();
		let optIndex   = $(e.target).parent().siblings('.choice').length;
		const {addOption} = this.props;
		addOption(inputIndex, optIndex, '请输入选项的内容');
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.select').index();
		let childLen = $('.select').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.select').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.select').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title, options, delOption, changeOption} = this.props;
		return (
			<div className="frow select">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					{
						Object.entries(options).map(item => <Option text={item[1]} changeOption={changeOption} delOption={delOption} key={item[0]} />)
					}
					<div className="selectHandle">
						<a href="javascript:;" onClick={this.handleAddOption}>添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class File extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.file').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.file').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.file').index();
		let childLen = $('.file').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.file').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.file').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title} = this.props;
		return (
			<div className="frow file">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					<button className="finput" disabled>上传文件</button>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class Address extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.address').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.address').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.address').index();
		let childLen = $('.address').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.address').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.address').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title} = this.props;
		return (
			<div className="frow address">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<select className="finput" disabled>
						<option value="">省</option>
					</select>
					<select className="finput" disabled>
						<option value="">市</option>
					</select>
					<select className="finput" disabled>
						<option value="">县/区</option>
					</select>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}

export class Date extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
		this.handleDelItem = this.handleDelItem.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	handleClick(e) {
		const {changeNe} = this.props;
		let index = $(e.target).parents('.date').index();
		changeNe(index);
	}
	handleMoveUp(e) {
		const {moveUp} = this.props;
		let index = $(e.target).parents('.date').index();
		if(index === 0) {
			alert('这已经是第一项了，不能再次上移');
			return;
		}
		moveUp(index);
	}
	handleMoveDown(e) {
		const {moveDown} = this.props;
		let index = $(e.target).parents('.date').index();
		let childLen = $('.date').parent().children().length;
		if(index + 1 === childLen) {
			alert('这已经是最后一项了，不能再次下移');
			return;
		}
		moveDown(index);
	}
	handleDelItem(e) {
		const {delFormItem} = this.props;
		let index = $(e.target).parents('.date').index();
		delFormItem(index);
	}
	handleTitleChange(e) {
		let inputIndex = $(e.target).parents('.date').index();
		const {changeTitle} = this.props;
		let value = e.target.value;
		changeTitle(inputIndex, value);
	}
	render() {
		const {title} = this.props;
		return (
			<div className="frow date">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value={title} onChange={this.handleTitleChange} />
					<div className="dateHandle">
						<p>请选择日期所需要收集的具体项目</p>
						<label><input type="radio" name="date_type"/>日期</label>
						<label><input type="radio" name="date_type"/>日期&时间</label>
						<label><input type="radio" name="date_type"/>时间</label>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1" onClick={this.handleDelItem}></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}