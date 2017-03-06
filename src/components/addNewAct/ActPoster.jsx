import React, {Component} from 'react';
import {Button, FormGroup, Col, FormControl, ControlLabel, Row, InputGroup} from 'react-bootstrap';

class ActCategory extends Component {
	render() {
		return (
			<FormGroup bsClass="form-item form-group">
				<Col sm={2}>
					<ControlLabel bsClass="cLabel">活动海报</ControlLabel>
				</Col>
				<Col sm={6}>
					<div className="preview"></div>
				</Col>
				<Col sm={4} bsClass="tl imgupload col">
					<Button bsStyle="primary">上传图片</Button>
					<p>温馨提示</p>
					<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。如果您并没有合适的图片，可以在系统图库中选择一张图片。建议上传尺寸 <strong>1080px*640px</strong> 的.png、.jpg、.gif图片，图片小于1M</p>
				</Col>
			</FormGroup>
		)
	}
}

export default ActCategory;