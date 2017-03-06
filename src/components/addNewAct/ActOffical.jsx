import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row, InputGroup} from 'react-bootstrap';

class ActOffical extends Component {
	render() {
		return (
			<FormGroup controlId="host" bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">主办　方</ControlLabel>
				</Col>
				<Col sm={10}>
					<InputGroup>
						<FormControl type="text" ref="offical"/>
						<InputGroup.Addon>添加主办方</InputGroup.Addon>
					</InputGroup>
				</Col>
			</FormGroup>
		)
	}
}

export default ActOffical;