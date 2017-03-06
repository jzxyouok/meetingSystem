import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row} from 'react-bootstrap';

class ActTime extends Component {
	render() {
		return (
			<Row bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动时间</ControlLabel>
				</Col>
				<Col sm={5}>
					<FormGroup controlId="beginTime" bsClass="pl tl form-group">
						<ControlLabel bsClass="cLabel">起始时间</ControlLabel>
						<FormControl type="date" ref="beginTime" />
					</FormGroup>
				</Col>
				<Col sm={5}>
					<FormGroup controlId="endTime" bsClass="pr tl form-group">
						<ControlLabel bsClass="cLabel">起始时间</ControlLabel>
						<FormControl type="date" ref="endTime" />
					</FormGroup>
				</Col>
			</Row>
		)
	}
}

export default ActTime;