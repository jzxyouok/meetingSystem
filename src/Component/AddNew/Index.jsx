import React, {Component} from 'react';
import {render} from 'react-dom';
import {Glyphicon} from 'react-bootstrap';
import $ from 'jquery';
import Immutable from 'immutable';
import {connect} from 'react-redux';

import '../../Style/AddNew.scss';
import NeOptions from './NeOptions';
import CommonOpt from './CommonOpt';
import CustomOpt from './CustomOpt';
import {Text, TextArea, Radio, Checkbox, Select, Date, Address, File} from './OptType';

class ApplicationForm extends Component {
	shouldComponentUpdate(nextprops, nextstate) {
		if( this.props === nextprops &&
			this.state === nextstate &&
			Immutable.is(this.props, nextprops) &&
			Immutable.is(this.state, nextstate) ) {
			return false;
		}
	}
	componentDidMount() {
		
	}
	render() {
		const CommonOpts = [{id:1, name: '性别'}, {id:2, name: '照片'}, {id:3, name: '与会类型'}, {id:4, name: '上衣尺寸'}];
		const CustomOpts = [{id:1, name: '普通文本框'}, {id:2, name: '多行文本框'}, {id:3, name: '日期'}, {id:4, name: '单项选择'}, {id:5, name: '多项选择'}, {id:6, name: '下拉框'}, {id:7, name: '文件'}];
		const CommmonOptArr = CommonOpts.map(item => {
			return <CommonOpt name={item.name} key={item.id} />
		});
		const CustomOptArr = CustomOpts.map(item => {
			return <CustomOpt name={item.name} key={item.id} />
		});
		const {formData} = this.props;
		console.log(formData)
		for(let i of formData) {
			switch(formData[i].type) {
				case 'text':
					formOptsArr.push(<Text />);
					break;
				case 'textarea':
					formOptsArr.push(<TextArea />);
					break;
				case 'radio':
					formOptsArr.push(<Radio />);
					break;
				case 'checkbox':
					formOptsArr.push(<Checkbox />);
					break;
				case 'select':
					formOptsArr.push(<Select />);
					break;
				case 'address':
					formOptsArr.push(<Address />);
					break;
				case 'date':
					formOptsArr.push(<Date />);
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

const mapStateToProps = (state) => ({
	formData: state.get('formData')
});
export default connect(
	mapStateToProps
)(ApplicationForm);