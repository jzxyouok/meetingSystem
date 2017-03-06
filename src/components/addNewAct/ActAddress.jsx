import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row} from 'react-bootstrap';

class ActAddress extends Component {
	render() {
		return (
			<Row bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动地点</ControlLabel>
				</Col>
				<Col sm={5}>
					<FormGroup bsClass="pl form-group">
						<FormControl componentClass="select" ref="province">
							<option value="">请选择省份</option>
							<option value="2">2</option>
						</FormControl>
					</FormGroup>
				</Col>
				<Col sm={5}>
					<FormGroup bsClass="pr form-group">
						<FormControl componentClass="select" ref="city">
							<option value="">请选择市</option>
							<option value="2">2</option>
						</FormControl>
					</FormGroup>
				</Col>
			</Row>
		)
	}
}

export default ActAddress;