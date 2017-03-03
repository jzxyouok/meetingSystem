import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
import '../../scss/admin/BaseInfo.scss';

class BaseInfo extends Component {
	render() {
		return (
			<div className="baseInfo">
				<h3>编辑基本信息</h3>
				<Form className="baseInfoForm">
					<FormGroup controlId="topic">
						<ControlLabel>会议标题</ControlLabel>
						<FormControl type="text" />
					</FormGroup>
					
					<FormGroup className="time clearfix">
						<Col sm={6}>
							<ControlLabel>开始时间</ControlLabel>
							<div className="clearfix">
								<FormControl className="pull-left" type="date" />
								<FormControl className="pull-left" componentClass="select">
									<option value="1">1</option>
									<option value="2">2</option>
								</FormControl>
							</div>
						</Col>
						<Col sm={6}>
							<ControlLabel>结束时间</ControlLabel>
							<div className="clearfix">
								<FormControl className="pull-left" type="date" />
								<FormControl className="pull-left" componentClass="select">
									<option value="1">1</option>
									<option value="2">2</option>
								</FormControl>
							</div>
						</Col>
					</FormGroup>

					<FormGroup className="address clearfix">
						<Col sm={6}>
							<ControlLabel>省</ControlLabel>
							<FormControl componentClass="select">
								<option value="1">1</option>
								<option value="2">2</option>
							</FormControl>
						</Col>
						<Col sm={6}>
							<ControlLabel>市</ControlLabel>
							<FormControl componentClass="select">
								<option value="1">1</option>
								<option value="2">2</option>
							</FormControl>
						</Col>
					</FormGroup>

					<FormGroup controlId="detailAddress" className="detailAddress">
						<ControlLabel>举办地点</ControlLabel>
						<FormControl type="text" />
					</FormGroup>

					<FormGroup className="offical">
						<ControlLabel>主办方</ControlLabel>
						<FormControl type="text" />
					</FormGroup>

					<FormGroup className="poster clearfix">
						<div className="posterImg pull-left">
							<img src="http://file.31huiyi.com/Uploads/neweventLogos/502.jpg" alt="poster"/>
						</div>
						<div className="uploadBtn pull-left">
							<Button>上传封面</Button>
							<p className="advice">建议尺寸：508*315px<br />大小：300KB以下</p>
						</div>
					</FormGroup>

					<FormGroup className="brief">
						<ControlLabel>会议简介</ControlLabel>
						<FormControl type="textarea" />
					</FormGroup>

					<FormGroup className="officialInfo">
						<ControlLabel>主办方联系方式</ControlLabel>
						<FormControl type="text" />
					</FormGroup>

					<div className="saveChange">
						<Button>保存</Button>
					</div>
				</Form>
			</div>
		)
	}
}

export default BaseInfo;























