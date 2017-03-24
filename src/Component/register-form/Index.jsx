import React, { Component } from 'react';
import '../../Style/register-form.scss';

import NeOptions from './Necessary-options';

export default class RegisterForm extends Component {
	render() {
		return (
			<div className="applicationForm">
				<p className="ftitle">报名表单设置</p>
				<div className="config">
					<NeOptions name="姓名" />
					<NeOptions name="手机号" />
					<p className="description">其他添加报名表单收集项</p>
					<div className="customCfg"></div>
					<div className="submit">
						<button>立即提交</button>
					</div>
				</div>
				<div className="ftool">
					<p className="title">常用项</p>
					<div className="common"></div>
					<div className="custom">
						<p className="title">自定义项</p>
						<ul></ul>
					</div>
				</div>
			</div>
		)
	}
}