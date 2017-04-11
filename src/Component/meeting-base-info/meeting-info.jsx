import { Form, Input, DatePicker, Cascader, Upload, Button, Icon, message } from 'antd';

import React, { Component } from 'react';
import fetch 				from 'isomorphic-fetch';
import { connect } 			from 'react-redux';
import moment 				from 'moment';

import options 				from '../../Resource/util/cascader-address-options';
import { 
	mapStateToProps, 
	mapDispatchToProps 
} 							from './meeting-info.conn';
import store 				from '../../Redux/Store/store';
import { serialize } 		from '../../Resource/util/utils';
import { updateMeetingBase } 	from '../../Config/apiUrl';
import { init_form } 		from '../../Redux/Action/create-meeting.action';

import '../../Style/create-meeting.scss';


const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

const createUrl = (fileObj) => window.URL.createObjectURL(fileObj);
class CreateMeeting extends Component {
	state = {
		img_url: '',
		submit_isFetching: false,
		save_isFetching: false
	}
	getFormDate = (code, id) => {
		const state = store.getState().get('create_meeting').toJS();
		let form_data = serialize(state);
		form_data.append('state', code);
		form_data.append('id', id);
		return form_data;
	}
	handleFetch = (data) => {
		fetch(updateMeetingBase, {
			method: 'post',
			body: data
		})
		.then(res => res.json())
		.then(res => {
			if(res.code === 1) {
				message.success(res.message);
				setTimeout(function(){
					location.href = './#/meeting-list';
				}, 3000);
			} else {
				message.warn(res.message);
			}
		})
		.catch(err => {
			message.error('网络异常请稍后重试，或联系管理员')
		});
	}
	handleSave = () => {
		const _this = this;
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err && !this.state.save_isFetching){
				const form_data = this.getFormDate(0, this.props.id);
				this.setState({
					save_isFetching: true
				});
				this.handleFetch(form_data);
			}
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err && !this.state.submit_isFetching) {
				const form_data = this.getFormDate(1, this.props.id);
				this.setState({
					submit_isFetching: true
				});
				this.handleFetch(form_data);
			}
		});
	}
	normFile = (e) => {
	    if (Array.isArray(e)) {
	    	return e;
	    }
	    return e && e.fileList;
  	}
  	componentWillReceiveProps(nextProps) {
  		this.setState({
  			img_url: nextProps.init_state.image
  		})
  	}
	render() {
		// 表单控件布局
		const formItemLayout = {
			labelCol: {
				xs: {span: 24},
				sm: {span: 4}
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 14}
			}
		}

		// 上传按钮布局
		const buttonItemLayout = {
			wrapperCol: {
				xs: {span: 24, offset: 0},
				sm: {span: 8, offset: 4}
			}
		}

		// 默认的上传图片的logo
		const default_upload_img = require('../../Resource/images/upload.jpg');

		const { getFieldDecorator } = this.props.form;
		return (
			<Form className="create-meeting" onSubmit={this.handleSubmit}>
				<p className="title">会议信息</p>
				<FormItem
					{...formItemLayout}
					label="会议主题"
					hasFeedback
					>
					{getFieldDecorator('title', {
						rules: [{required: true, message: '会议主题不能为空'}]
					})(
						<Input />
					)}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="报名时间"
					hasFeedback
					>
					{getFieldDecorator('reg_time', {
						rules: [{type: 'array', required: true, message: '请选择报名时间'}]
					})(
						<RangePicker showTime format="YYYY-MM-DD HH:mm" />
					)}
				</FormItem>
				<FormItem 
					{...formItemLayout} 
					label="会议时间" 
					hasFeedback>
					{getFieldDecorator('meeting_time', {
						rules: [{type: 'array', required: true, message: '请选择会议时间'}]
					})(
						<RangePicker showTime format="YYYY-MM-DD HH:mm" />
					)}		
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="会议地址"
					hasFeedback
					>
					{getFieldDecorator('address', {
						rules: [{type: 'array', required: true, message: '请选择地址'}]
					})(
						<Cascader options={options} />
					)}
				</FormItem>
				<FormItem 
					{...formItemLayout} 
					hasFeedback 
					label="详细地址">
					{getFieldDecorator('detail_address', {
						rules: [{required: true, message: '请输入酒店的详细地址'}]
					})(
						<Input />
					)}
				</FormItem>
				<FormItem 
					{...formItemLayout} 
					label="举办方" 
					hasFeedback>
					{getFieldDecorator('official', {
						rules: [{required: true, message: '会议的主办方不能为空'}]
					})(
						<Input />
					)}		
				</FormItem>
				<FormItem 
					{...formItemLayout} 
					hasFeedback 
					label="会议类型">
					{getFieldDecorator('act_type', {
						rules: [{required: true, message: '活动类型不能为空'}]
					})(
						<Input />
					)}
				</FormItem>
				<FormItem 
					{...formItemLayout} 
					label="会议海报" 
					hasFeedback>
					{getFieldDecorator('poster', {
						valuePropName: 'fieldList',
						getValueFromEvent: this.normFile
					})(
						<Upload listType="picture" accept="image/*" beforeUpload={(field, fieldList) => {
							this.props.update_poster(field);
							this.setState({
								img_url: createUrl(field)
							});
							this.props.init_form(Object.assign({}, this.props.init_state, {image: createUrl(field)}));
							return false;
						}}>
							<Button>
								<Icon type="upload" /> 点击上传
							</Button>
						</Upload>
					)}

					<img
						className="preview"
						src={this.state.img_url === '' ? default_upload_img : this.state.img_url} 
						alt="preview" 
					/>
				</FormItem>
				<FormItem
					{...formItemLayout}
					hasFeedback
					label="活动详情">
					{getFieldDecorator('details', {
						rules: [{required: true, message: '活动详情不能为空'}]
					})(
						<Input type="textarea" />
					)}
				</FormItem>
				<FormItem {...buttonItemLayout}>
					<Button 
						type="primary"
						onClick={this.handleSave}
						loading={ this.state.save_isFetching ? true : false}>
						{ this.state.save_isFetching ? '正在保存...' : '保存活动'}
					</Button>
					<Button 
						type="primary" 
						htmlType="submit"
						loading= { this.state.submit_isFetching ? true : false}>
						{ this.state.submit_isFetching ? '正在提交...' : '发布活动'}
					</Button>
				</FormItem>
			</Form>
		)
	}
}

// 先用Form.create将表单装饰成高阶组件，这里就不用去每个表单中控件中dispatch一个action
// 再用connect将其装饰成容器组件，这里相当于套了两层，但是props依旧可以取到
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form.create({
	onFieldsChange: (props, fields) => {
		if(Object.keys(fields).length !== 1) {
			return;
		} else {
			const dirtyKey = Object.keys(fields)[0];
			const dirtyVal = Object.values(fields)[0].value;

			switch(dirtyKey) {
				case 'title':
					return props.update_title(dirtyVal);
				case 'reg_time':
					let beg_time = dirtyVal[0].format('YYYY-MM-DD HH:mm');
					let end_time = dirtyVal[1].format('YYYY-MM-DD HH:mm');
					return props.update_reg_time(`${beg_time} ~ ${end_time}`);
				case 'meeting_time':
					let me_beg_time = dirtyVal[0].format('YYYY-MM-DD HH:mm');
					let me_end_time = dirtyVal[1].format('YYYY-MM-DD HH:mm');
					return props.update_meeting_time(`${me_beg_time} ~ ${me_end_time}`);
				case 'address':
					let province = dirtyVal[0],
						city = dirtyVal[1],
						country = dirtyVal[2];
					return props.update_address(province+','+city+','+country);
				case 'detail_address':
					return props.update_detail_address(dirtyVal);
				case 'official':
					return props.update_official(dirtyVal);
				case 'act_type':
					return props.update_type(dirtyVal);
				case 'details':
					return props.update_details(dirtyVal);
				default:
					break;
			}
		}
	},
	mapPropsToFields: (props) => {
		let { 
			title, 
			reg_time = ' ~ ', 
			meeting_time = ' ~ ', 
			address = ',,', 
			detail_address, 
			official,
			category,
			details,
			image
		} = props;

		return { 
			title: { value: title },
			reg_time: { value: reg_time.split(' ~ ').map(x => moment(x)) },
			meeting_time: { value: meeting_time.split(' ~ ').map(x => moment(x)) },
			address: { value: address.split(',') },
			detail_address: { value: detail_address },
			official: { value: official },
			act_type: { value: category },
			details: { value: details }
		}
	}
})(CreateMeeting));