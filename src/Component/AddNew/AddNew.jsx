import React, {Component} from 'react';
import Immutable from 'immutable';

import '../../Style/AddNew.scss';
import NeOptions from './NeOptions';
import CommonOpt from './CommonOpt';
import CustomOpt from './CustomOpt';
import {Text, TextArea, Radio, Checkbox, Select, Date, Address, File} from './OptType';
import store from '../../Redux/Store/store';

class ApplicationForm extends Component {
	render() {
		let {formData, changeNe, addItem, moveUp, moveDown, delFormItem, delOption, addOption, changeTitle, changeOption, submitForm} = this.props;
		const CommonOpts = [{id:1, name: '性别', operation: 'sex'}, {id:2, name: '照片', operation: 'photo'}, {id:3, name: '与会类型', operation: 'type'}, {id:4, name: '上衣尺寸', operation: 'size'}];
		const CustomOpts = [{id:1, name: '普通文本框', operation: 'addText'}, {id:2, name: '多行文本框', operation: 'addTextArea'}, {id:3, name: '日期', operation: 'addDate'}, {id:4, name: '单项选择', operation: 'addRadio'}, {id:5, name: '多项选择', operation: 'addCheckbox'}, {id:6, name: '下拉框', operation: 'addSelect'}, {id:7, name: '文件', operation: 'addFile'}];
		const CommmonOptArr = CommonOpts.map(item => {
			return <CommonOpt 
					name={item.name} 
					key={item.id} 
					operation={item.operation} 
					addItem={addItem} 
					/>
		});
		const CustomOptArr = CustomOpts.map(item => {
			return <CustomOpt 
					name={item.name} 
					key={item.id}
					operation={item.operation}
					addItem={addItem}
					/>
		});
		let formOptsArr = [];
		formData = formData.toJS();
		for(let i of Object.keys(formData)) {
			let {title, options = {}} = formData[i];
			switch(formData[i].optType) {
				case 'text':
					formOptsArr.push(<Text 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										changeTitle={changeTitle}
										/>);
					break;
				case 'textarea':
					formOptsArr.push(<TextArea 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										changeTitle={changeTitle}
										/>);
					break;
				case 'radio':
					formOptsArr.push(<Radio 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										delOption={delOption}
										addOption={addOption}
										changeTitle={changeTitle}
										changeOption={changeOption}
										/>);
					break;
				case 'checkbox':
					formOptsArr.push(<Checkbox 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										delOption={delOption}
										addOption={addOption}
										changeTitle={changeTitle}
										changeOption={changeOption}
										/>);
					break;
				case 'select':
					formOptsArr.push(<Select 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										delOption={delOption}
										addOption={addOption}
										changeTitle={changeTitle}
										changeOption={changeOption}
										/>);
					break;
				case 'address':
					formOptsArr.push(<Address 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										changeTitle={changeTitle}
										/>);
					break;
				case 'file':
					formOptsArr.push(<File 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										changeTitle={changeTitle}
										/>);
					break;
				case 'date':
					formOptsArr.push(<Date 
										key={i} 
										changeNe={changeNe}
										title={title}
										options={options}
										moveUp={moveUp}
										moveDown={moveDown}
										delFormItem={delFormItem}
										changeTitle={changeTitle}
										/>);
					break;
				default:
					break;
			}
		}
		return (
			<div className="applicationForm">
				<p className="ftitle">报名表单设置</p>
				<div className="config">
					<NeOptions name="姓名" />
					<NeOptions name="手机号" />
					<p className="description">其他添加报名表单收集项</p>
					<div className="customCfg">
						{formOptsArr}
					</div>
					<div className="submit">
						<button onClick={
							() => {
								let state = store.getState().toJS();
								submitForm.call(null, JSON.stringify(state.formData));
							}
						}>立即提交</button>
					</div>
				</div>
				<div className="ftool">
					<p className="title">常用项</p>
					<div className="common">
						{CommmonOptArr}
					</div>
					<div className="custom">
						<p className="title">自定义项</p>
						<ul>
							{CustomOptArr}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default ApplicationForm;