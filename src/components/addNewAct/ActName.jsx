import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';

class ActName extends Component {
	render() {
		return (
			<FormGroup bsClass="form-item form-group" controlId="actName">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动名称</ControlLabel>
				</Col>
				<Col sm={10}>
					<FormControl bsClass="form-control actName" ref="actName" type="text" placeholder="请输入活动名称" />
				</Col>
			</FormGroup>
		)
	}
}

export default ActName;