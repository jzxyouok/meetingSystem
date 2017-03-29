import React, { Component } from 'react';
import { Form } from 'antd';

import options from '../../Resource/util/cascader-address-options';

const FormItem = Form.Item;

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

class CreateMeetingForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		const { img_url, save_isFetching, submit_isFetching } = this.props;
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
							return false;
						}}>
							<Button>
								<Icon type="upload" /> 点击上传
							</Button>
						</Upload>
					)}

					<img
						className="preview"
						src={img_url === '' ? default_upload_img : img_url} 
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
						loading={ save_isFetching ? true : false}>
						{ save_isFetching ? '正在保存...' : '保存'}
					</Button>
					<Button 
						type="primary" 
						htmlType="submit"
						loading= { submit_isFetching ? true : false}>
						{ submit_isFetching ? '正在提交...' : '提交'}
					</Button>
				</FormItem>
			</Form>
		)
	}
}