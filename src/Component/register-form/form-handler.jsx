import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { connect } from 'react-redux';

const button_layout = {
	xs: { offset: 0 },
	sm: { offset: 4 }
};

class RegisterFormHandler extends Component {
	render() {
		return (
			<Row>
				<Col {...button_layout} className="button-handler">
					<Button type="primary">保存草稿</Button>
					<Button type="primary">立即发布</Button>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterFormHandler);