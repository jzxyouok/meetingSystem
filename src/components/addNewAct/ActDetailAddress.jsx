import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row} from 'react-bootstrap';

class ActAddress extends Component {
	render() {
		return (
			<FormGroup controlId="detailAddress" bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">详细地址</ControlLabel>
				</Col>
				<Col sm={10}>
					<FormControl type="text" ref="detailAddress" placeholder="请输入详细地址" />
				</Col>
			</FormGroup>
		)
	}
}

export default ActAddress;