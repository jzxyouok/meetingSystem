import React, {Component} from 'react';
import $ from 'jquery';
import Option from './Option';

export class Text extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
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
	render() {
		const {title} = this.props;
		return (
			<div className="frow text">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					<input type="text" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
	render() {
		const {title} = this.props;
		return (
			<div className="frow textarea">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					<input type="textarea" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
	render() {
		const {title, options} = this.props;
		return (
			<div className="frow radio">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					{
						Object.entries(options).map(item => <Option text={item[1]} key={item[0]} />)
					}
					<div className="radioHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
	render() {
		const {title, options} = this.props;
		return (
			<div className="frow checkbox">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					{
						Object.entries(options).map(item => <Option text={item[1]} key={item[0]} />)
					}
					<div className="checkboxHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
	render() {
		const {title, options} = this.props;
		return (
			<div className="frow select">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					{
						Object.entries(options).map(item => <Option text={item[1]} key={item[0]} />)
					}
					<div className="selectHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
	render() {
		const {title} = this.props;
		return (
			<div className="frow file">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue={title} />
					<button className="finput" disabled>上传文件</button>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
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
					<span className="iconfont icon-del1"></span>
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
	render() {
		return (
			<div className="frow date">
				<div className="flabel">
					<label><input type="checkbox" onChange={this.handleClick}/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" defaultValue="日期" />
					<div className="dateHandle">
						<p>请选择日期所需要收集的具体项目</p>
						<label><input type="radio" name="date_type"/>日期</label>
						<label><input type="radio" name="date_type"/>日期&时间</label>
						<label><input type="radio" name="date_type"/>时间</label>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang" onClick={this.handleMoveUp}></span>
					<span className="iconfont icon-xia" onClick={this.handleMoveDown}></span>
				</div>
			</div>
		)
	}
}