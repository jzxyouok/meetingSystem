import React, {Component} from 'react';
import Immutable from 'immutable';

import '../../Style/AddNew.scss';
import NeOptions from './NeOptions';
import CommonOpt from './CommonOpt';
import CustomOpt from './CustomOpt';
import {Text, TextArea, Radio, Checkbox, Select, Date, Address, File} from './OptType';

class ApplicationForm extends Component {
	shouldComponentUpdate(nextprops, nextstate) {
		if( Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextprops)) &&
			Immutable.is(Immutable.fromJS(this.state), Immutable.fromJS(nextstate)) ) {
			return false;
		} else {
			return true;
		}
	}
	componentDidMount() {
		
	}
	render() {
		let {formData, changeNe} = this.props;
		console.log(formData.toJS());
		const CommonOpts = [{id:1, name: '性别'}, {id:2, name: '照片'}, {id:3, name: '与会类型'}, {id:4, name: '上衣尺寸'}];
		const CustomOpts = [{id:1, name: '普通文本框'}, {id:2, name: '多行文本框'}, {id:3, name: '日期'}, {id:4, name: '单项选择'}, {id:5, name: '多项选择'}, {id:6, name: '下拉框'}, {id:7, name: '文件'}];
		const CommmonOptArr = CommonOpts.map(item => {
			return <CommonOpt name={item.name} key={item.id} />
		});
		const CustomOptArr = CustomOpts.map(item => {
			return <CustomOpt name={item.name} key={item.id} />
		});
		let formOptsArr = [];
		formData = formData.toJS();
		for(let i of Object.keys(formData)) {
			switch(formData[i].type) {
				case 'text':
					formOptsArr.push(<Text key={i} changeNe={changeNe} />);
					break;
				case 'textarea':
					formOptsArr.push(<TextArea key={i} />);
					break;
				case 'radio':
					formOptsArr.push(<Radio key={i} />);
					break;
				case 'checkbox':
					formOptsArr.push(<Checkbox key={i} />);
					break;
				case 'select':
					formOptsArr.push(<Select key={i} />);
					break;
				case 'address':
					formOptsArr.push(<Address key={i} />);
					break;
				case 'date':
					formOptsArr.push(<Date key={i} />);
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