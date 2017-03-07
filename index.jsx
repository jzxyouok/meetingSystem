import React, {Component} from 'react';
import {render} from 'react-dom';
import {Glyphicon} from 'react-bootstrap';

import './test.scss';
import RequiredInfo from './RequiredInfo';

class ApplicationForm extends Component {
	render() {
		return (
			<div className="applicationForm">
				<p className="form-title">报名表单设置</p>
				<div className="config">
					<RequiredInfo name="姓名" />
					<RequiredInfo name="手机号" />
					<p className="description">其他添加报名表单收集项</p>
					
					<div className="customCfg">
					
						<div className="form-row text">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="普通文本框，请输入标题" />
								<input type="text" className="form-input" disabled />
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>
						
						<div className="form-row textarea">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="多行文本框，请输入标题" />
								<input type="textarea" className="form-input" disabled />
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row radio">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="单选题，请输入标题" />
								<div className="choice">
									<input type="radio" />
									<input type="text" className="form-input" value="请输入选项"/>
								</div>
								<div className="radioHandle">
									<a href="#">添加项目</a>
								</div>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row checkbox">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="多选题，请输入标题" />
								<div className="choice">
									<input type="checkbox" />
									<input type="text" className="form-input" value="请输入选项"/>
								</div>
								<div className="checkboxHandle">
									<a href="#">添加项目</a>
								</div>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row select">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="下拉框题，请输入标题" />
								<div className="choice">
									<input type="checkbox" disabled />
									<input type="text" className="form-input" value="请输入选项"/>
								</div>
								<div className="selectHandle">
									<a href="#">添加项目</a>
								</div>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row file">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="文件" />
								<button className="form-input" disabled>上传文件</button>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row address">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<select className="form-input" disabled>
									<option value="">省</option>
								</select>
								<select className="form-input" disabled>
									<option value="">市</option>
								</select>
								<select className="form-input" disabled>
									<option value="">县/区</option>
								</select>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>

						<div className="form-row date">
							<div className="form-label">
								<label><input type="checkbox"/>必填</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" value="日期" />
								<div className="dateHandle">
									<p>请选择日期所需要收集的具体项目</p>
									<label><input type="radio" name="date_type"/>日期</label>
									<label><input type="radio" name="date_type"/>日期&时间</label>
									<label><input type="radio" name="date_type"/>时间</label>
								</div>
							</div>
							<div className="handle">
								<Glyphicon glyph="cog" />
								<Glyphicon glyph="trash" />
							</div>
						</div>
					</div>
				</div>
				<div className="form-tool">
					<p className="title">常用项</p>
					<div className="common">
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
						<a href="#">姓名</a>
					</div>
					<div className="custom">
						<p className="title">自定义项</p>
						<ul>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
							<li><a href="#"><span></span>普通文本框<span></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
render(<ApplicationForm />, document.getElementById('app'));