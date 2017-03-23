import React, { Component } from 'react';
import { Form, Input, DatePicker, Cascader, Upload, Button, Icon } from 'antd';
import fetch from 'isomorphic-fetch';

import '../../Style/create-meeting.scss';
import options from '../../Resource/util/cascader-address-options';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

const createUrl = (fileObj) => window.URL.createObjectURL(fileObj);
class CreateMeeting extends Component {
	state = {
		img_url: ''
	}
	handleSubmit = (e) => {
		e.preventDefault();
	}
	normFile = (e) => {
	    if (Array.isArray(e)) {
	    	return e;
	    }
	    return e && e.fileList;
  	}
	render() {
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

		const buttonItemLayout = {
			wrapperCol: {
				xs: {span: 24, offset: 0},
				sm: {span: 8, offset: 4}
			}
		}

		const default_upload_img = require('../../Resource/images/upload.jpg');

		const { getFieldDecorator } = this.props.form;
		return (
			<Form className="create-meeting" onSubmit={this.handleSubmit}>
				<FormItem
					{...formItemLayout}
					label="会议主题"
					hasFeedback
					>
					{getFieldDecorator('name', {
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
						initialValue: ['广东省', '佛山市'],
						rules: [{type: 'array', required: true, message: '请选择地址'}]
					})(
						<Cascader
							options={options}
						/>
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
					label="活动类型">
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
							console.log(field);
							console.log(fieldList);
							this.setState({
								img_url: createUrl(field)
							});
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
					<Button type="primary">保存</Button>
					<Button type="primary" htmlType="submit">提交</Button>
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(CreateMeeting);