import React, {Component} from 'react';
import '../../scss/admin/addnewact.scss';

import {Button, Form, FormGroup, Col, FormControl, InputGroup, ControlLabel, Row} from 'react-bootstrap';

export default class AddNewActForm extends Component {
	render() {
		return (
			<div className="newAct">
				<Form horizontal>
					<span className="form-title">活动信息</span>
					<FormGroup bsClass="form-item form-group" controlId="actName">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动名称</ControlLabel>
						</Col>
						<Col sm={10}>
							<FormControl bsClass="form-control actName" type="text" placeholder="请输入活动名称" />
						</Col>
					</FormGroup>
					
					<Row bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动时间</ControlLabel>
						</Col>
						<Col sm={5}>
							<FormGroup controlId="beginTime" bsClass="pl tl form-group">
								<ControlLabel bsClass="cLabel">起始时间</ControlLabel>
								<FormControl type="date" />
							</FormGroup>
						</Col>
						<Col sm={5}>
							<FormGroup controlId="endTime" bsClass="pr tl form-group">
								<ControlLabel bsClass="cLabel">起始时间</ControlLabel>
								<FormControl type="date" />
							</FormGroup>
						</Col>
					</Row>

					<Row bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动地点</ControlLabel>
						</Col>
						<Col sm={5}>
							<FormGroup bsClass="pl form-group">
								<FormControl componentClass="select">
									<option value="1">1</option>
									<option value="2">2</option>
								</FormControl>
							</FormGroup>
						</Col>
						<Col sm={5}>
							<FormGroup bsClass="pr form-group">
								<FormControl componentClass="select">
									<option value="1">1</option>
									<option value="2">2</option>
								</FormControl>
							</FormGroup>
						</Col>
					</Row>
					
					<FormGroup controlId="detailAddress" bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">详细地址</ControlLabel>
						</Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="请输入详细地址" />
						</Col>
					</FormGroup>

					<FormGroup controlId="host" bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">主办　方</ControlLabel>
						</Col>
						<Col sm={10}>
							<InputGroup>
								<FormControl type="text"/>
								<InputGroup.Addon>添加主办方</InputGroup.Addon>
							</InputGroup>
						</Col>
					</FormGroup>

					<FormGroup controlId="actCategory" bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动分类</ControlLabel>
						</Col>
						<Col sm={10}>
						    <InputGroup>
							    <FormControl componentClass="select">
								    <option value="1">1</option>
								    <option value="2">2</option>
							    </FormControl>
							    <InputGroup.Addon>添加活动分类</InputGroup.Addon>
						    </InputGroup>
						</Col>
					</FormGroup>

					<FormGroup bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动海报</ControlLabel>
						</Col>
						<Col sm={6}>
							<div className="preview"></div>
						</Col>
						<Col sm={4} bsClass="tl imgupload col">
							<Button bsStyle="primary">上传图片</Button>
							<p>温馨提示</p>
							<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。如果您并没有合适的图片，可以在系统图库中选择一张图片。建议上传尺寸 <strong>1080px*640px</strong> 的.png、.jpg、.gif图片，图片小于1M</p>
						</Col>
					</FormGroup>

					<FormGroup controlId="actDetail" bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动详情</ControlLabel>
						</Col>
						<Col sm={10}>
							<FormControl componentClass="textarea"></FormControl>
						</Col>
					</FormGroup>

					<FormGroup controlId="actTags" bsClass="form-item form-group">
						<Col sm={2}>
							<ControlLabel bsClass="cLabel">活动标签</ControlLabel>
						</Col>
						<Col sm={10}>
							<InputGroup>
								<FormControl type="text" />
								<InputGroup.Addon>添加标签</InputGroup.Addon>
							</InputGroup>
						</Col>
					</FormGroup>

					<div className="submitAct">
						<Button bsStyle="primary" block>提交</Button>
					</div>
				</Form>
			</div>
		)
	}
}

