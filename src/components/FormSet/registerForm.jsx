import React, {Component} from 'react';
import {render} from 'react-dom';
import {Modal, Button, Form, InputGroup, FormGroup, ControlLabel, FormControl, Col, Glyphicon, Checkbox} from 'react-bootstrap';
import '../../scss/admin/registerForm.scss';
import ToolBox from './ToolBox';

class Register extends Component {
	render() {
		return  <div className="register clearfix">
					<Form horizontal className='form'>
						<span className='title'>报名表单设置</span>
						<FormGroup controlId="name">
							<Col xs={2} className='label'>
								<ControlLabel>姓名</ControlLabel>
							</Col>
							<Col xs={8}>
								<FormControl type="text" disabled></FormControl>
							</Col>	
						</FormGroup>

						<FormGroup controlId="tel">
							<Col xs={2} className='label'>
								<ControlLabel>手机号</ControlLabel>
							</Col>
							<Col xs={8}>
								<FormControl type="text" disabled></FormControl>
							</Col>	
						</FormGroup>

						<p className='others'>其他添加报名表单收集项</p>
						
						<FormGroup>
							<Col xs={2} className='label'>
								<Checkbox inline>必填</Checkbox>
							</Col>
							<Col xs={8}>
								<FormControl type="text" placeholder="请在此输入标题"></FormControl>
							</Col>
							<Col xs={2} className='handle'>
								<Glyphicon glyph="cog"/>
								<Glyphicon glyph="trash"/>
							</Col>
						</FormGroup>
					</Form>
					<ToolBox />
				</div>

	}
}

export default Register;