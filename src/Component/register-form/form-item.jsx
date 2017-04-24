// 不同类型的表单类型
import React, {Component} from 'react';
import {Input, Select, Radio, Checkbox, DatePicker} from 'antd';
import {FormItemHandler} from './form-item-operator';

const Option 		= Select.Option;
const RadioGroup 	= Radio.Group;
const CheckboxGroup = Checkbox.Group;

// 下拉选项题
export class RegSelect extends Component {
	selectWidth = { width: '100%' }
	render() {
		return (
			<div className="form-item">
				<p className="title">下拉选项题</p>
				<div className="choice">
					<Select placeholder="下拉选项题" style={this.selectWidth}>
						<Option value="1">A</Option>
						<Option value="2">B</Option>
					</Select>
				</div>
				<FormItemHandler type="choice" />
			</div>
		)
	}
}

// 单选题
export class RegRadio extends Component {
	render() {
		return (
			<div className="form-item">
				<p className="title">单选题</p>
				<div className="choice">
					<RadioGroup>
						<Radio value={1}>A</Radio>
						<Radio value={2}>B</Radio>
					</RadioGroup>
				</div>
				<FormItemHandler type="choice" />
			</div>
		)
	}
}

// 多选题
export class RegCheckbox extends Component {
	checkOptions = () => {
		return [
			{ label: 'Apple', value: 'Apple' },
			{ label: 'Pear', value: 'Pear' },
			{ label: 'Orange', value: 'Orange' },
		]
	}
	render() {
		const options = this.checkOptions();
		return (
			<div className="form-item">
				<p className="title">多选题</p>
				<div className="choice">
					<CheckboxGroup options={options} />
				</div>
				<FormItemHandler type="choice" />
			</div>
		)
	}
}

// 填空题
export class RegInput extends Component {
	render() {
		return (
			<div className="form-item">
				<p className="title">填空题</p>
				<div className="choice">
					<Input placeholder="填空题"/>
				</div>
				<FormItemHandler type="input" />
			</div>
		)
	}
}

// 时间选择题
export class RegTimer extends Component {
	timerStyle = {width: '100%'}
	render() {
		return (
			<div className="form-item">
				<p className="title">时间选择题</p>
				<div className="choice">
					<DatePicker
						placeholder="Select Time"
						style={this.timerStyle}
						showTime 
						format="YYYY-MM-DD HH:mm:ss" />
				</div>
				<FormItemHandler type="input" />
			</div>
		)
	}
}

// 文件选择题
export class RegFile extends Component {
	fileStyle = {display: 'none'}
	render() {
		return (
			<div className="form-item">
				<p className="title">文件选择题</p>
				<div className="choice">
					<label className="ant-btn ant-btn-primary">
						选择文件
						<Input style={this.fileStyle} type="file" />
					</label>
				</div>
				<FormItemHandler type="input" />
			</div>
		)
	}
}