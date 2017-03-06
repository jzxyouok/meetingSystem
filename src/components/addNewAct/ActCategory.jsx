import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row, InputGroup} from 'react-bootstrap';

class ActCategory extends Component {
	render() {
		return (
			<FormGroup controlId="actCategory" bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动分类</ControlLabel>
				</Col>
				<Col sm={10}>
				    <InputGroup>
					    <FormControl componentClass="select" ref="category">
						    <option value="1">1</option>
						    <option value="2">2</option>
					    </FormControl>
					    <InputGroup.Addon>添加活动分类</InputGroup.Addon>
				    </InputGroup>
				</Col>
			</FormGroup>
		)
	}
}

export default ActCategory;