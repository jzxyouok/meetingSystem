import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from '../../scss/admin/addnewact.scss';

import {Button, Form, FormGroup, Col, FormControl, InputGroup} from 'react-bootstrap';

class AddNewActForm extends Component {
	render() {
		return <Form horizontal>
			<span styleName="form-title">活动信息</span>
			<FormGroup bsClass="form-item">
				<Col md={2}>活动名称</Col>
				<Col md={10}>
					<FormControl bsClass="form-control actName" type="text" placeholder="请输入活动名称" />
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动时间</Col>
				<Col md={5}>
					<p>起始时间</p>
					<FormControl type="date" />
				</Col>
				<Col md={5}>
					<p>起始时间</p>
					<FormControl type="date" />
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动地点</Col>
				<Col md={10}>
					<FormControl componentClass="select">
						<option value="1">1</option>
						<option value="2">2</option>
					</FormControl>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={10} mdOffset={2}>
					<FormControl type="text" placeholder="请输入详细地址" />
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>主办方</Col>
				<Col md={10}>
					<InputGroup>
						<FormControl type="text"/>
						<InputGroup.Addon>添加主办方</InputGroup.Addon>
					</InputGroup>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动分类</Col>
				<Col md={10}>
				    <InputGroup>
					    <FormControl componentClass="select">
						    <option value="1">1</option>
						    <option value="2">2</option>
					    </FormControl>
					    <InputGroup.Addon>添加活动分类</InputGroup.Addon>
				    </InputGroup>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动海报</Col>
				<Col md={5}>
					<div className="preview"></div>
				</Col>
				<Col md={5}>
					<Button>上传图片</Button>
					<p>温馨提示</p>
					<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。如果您并没有合适的图片，可以在系统图库中选择一张图片。建议上传尺寸 <strong>1080px*640px</strong> 的.png、.jpg、.gif图片，图片小于1M</p>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动详情</Col>
				<Col md={10}>
					<FormControl componentClass="textarea"></FormControl>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col md={2}>活动标签</Col>
				<Col md={10}>
					<InputGroup>
						<FormControl type="text" />
						<InputGroup.Addon>添加标签</InputGroup.Addon>
					</InputGroup>
				</Col>
			</FormGroup>
		</Form>
	}
}

export default CSSModules(AddNewActForm, styles);