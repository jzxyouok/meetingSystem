import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
class ActSubmits extends Component {
	render() {
		return (
			<div className="submitAct">
				<Button bsStyle="primary" block>提交</Button>
			</div>
		)
	}
}

export default ActSubmits;