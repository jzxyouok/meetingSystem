import React, {Component} from 'react';
import {FormGroup, Col, FormControl, ControlLabel, InputGroup} from 'react-bootstrap';

class ActDetail extends Component {
	render() {
		return (
			<FormGroup controlId="actTags" bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动标签</ControlLabel>
				</Col>
				<Col sm={10}>
					<InputGroup>
						<FormControl type="text" ref="tags" />
						<InputGroup.Addon>添加标签</InputGroup.Addon>
					</InputGroup>
				</Col>
			</FormGroup>
		)
	}
}

export default ActDetail;