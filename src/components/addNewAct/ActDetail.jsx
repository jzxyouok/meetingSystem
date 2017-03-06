import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row, InputGroup} from 'react-bootstrap';

class ActDetail extends Component {
	render() {
		return (
			<FormGroup controlId="actDetail" bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动详情</ControlLabel>
				</Col>
				<Col sm={10}>
					<FormControl componentClass="textarea" ref="detail"></FormControl>
				</Col>
			</FormGroup>
		)
	}
}

export default ActDetail;