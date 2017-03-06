import React, {Component} from 'react';
import {Modal, FormControl, Button} from 'react-bootstrap';

const ActModal = ({title, show}) => (
	<Modal show={show}>
		<Modal.Header>{title}</Modal.Header>
		<Modal.Body>
			<FormControl type="text"></FormControl>
		</Modal.Body>
		<Modal.Footer>
			<Button>关闭</Button>
			<Button>保存</Button>
		</Modal.Footer>
	</Modal>
);

export class AddOfficalModal extends Component {
	render() {
		const {isShow} = this.props;
		return <ActModal title = '添加主办方' show={isShow} />
	}
}

export class AddCategoryModal extends Component {
	render() {
		const {isShow} = this.props;
		return <ActModal title = '添加分类' show={isShow} />
	}
}

export class AddTagsModal extends Component {
	render() {
		const {isShow} = this.props;
		return <ActModal title = '添加标签' show={isShow} />
	}
}