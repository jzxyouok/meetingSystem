import React, {Component} from 'react';

export class Text extends Component {
	render() {
		return (
			<div className="frow text">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="普通文本框，请输入标题" />
					<input type="text" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class TextArea extends Component {
	render() {
		return (
			<div className="frow textarea">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="多行文本框，请输入标题" />
					<input type="textarea" className="finput" disabled />
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class Radio extends Component {
	render() {
		return (
			<div className="frow radio">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="单选题，请输入标题" />
					<div className="choice">
						<input type="radio" />
						<span className="iconfont icon-del2"></span>
						<input type="text" className="finput" value="请输入选项"/>
					</div>
					<div className="radioHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class Checkbox extends Component {
	render() {
		return (
			<div className="frow checkbox">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="多选题，请输入标题" />
					<div className="choice">
						<input type="checkbox" />
						<span className="iconfont icon-del2"></span>
						<input type="text" className="finput" value="请输入选项"/>
					</div>
					<div className="checkboxHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class Select extends Component {
	render() {
		return (
			<div className="frow select">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="下拉框题，请输入标题" />
					<div className="choice">
						<input type="checkbox" disabled />
						<span className="iconfont icon-del2"></span>
						<input type="text" className="finput" value="请输入选项"/>
					</div>
					<div className="selectHandle">
						<a href="#">添加项目</a>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class File extends Component {
	render() {
		return (
			<div className="frow file">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="文件" />
					<button className="finput" disabled>上传文件</button>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class Address extends Component {
	render() {
		return (
			<div className="frow address">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
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
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}

export class Date extends Component {
	render() {
		return (
			<div className="frow date">
				<div className="flabel">
					<label><input type="checkbox"/>必填</label>
				</div>
				<div className="fgroup">
					<input type="text" className="finput" value="日期" />
					<div className="dateHandle">
						<p>请选择日期所需要收集的具体项目</p>
						<label><input type="radio" name="date_type"/>日期</label>
						<label><input type="radio" name="date_type"/>日期&时间</label>
						<label><input type="radio" name="date_type"/>时间</label>
					</div>
				</div>
				<div className="handle">
					<span className="iconfont icon-del1"></span>
					<span className="iconfont icon-shang"></span>
					<span className="iconfont icon-xia"></span>
				</div>
			</div>
		)
	}
}