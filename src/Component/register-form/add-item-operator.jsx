import React, { Component } 		from 'react';
import { Row, Col, Button, Icon, Modal, Input
								} 	from 'antd';
import { connect } 					from 'react-redux';

import * as actions 				from '../../Redux/Action/register-form.action'; 

class AddCustomize extends Component {
	render() {
		return (
			<Row className="add-customize">
				<Col offset={4}>
					<Button onClick={this.props.handle_single_choice}><Icon type="plus" />单选</Button>
					<Button onClick={this.props.handle_muti_choice}><Icon type="plus" />多选</Button>
					<Button onClick={this.props.handle_select_choice}><Icon type="plus" />下拉框</Button>
					<Button onClick={this.props.handle_add_date}><Icon type="plus" />日期</Button>
					<Button onClick={this.props.handle_add_file}><Icon type="plus" />文件</Button>
					<Button onClick={this.props.handle_add_text}><Icon type="plus" />普通文本框</Button>
					<Button onClick={this.props.handle_add_textarea}><Icon type="plus" />多行文本框</Button>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	handle_single_choice: () => dispatch(actions.add_single_choice()),
	handle_muti_choice: () => dispatch(actions.add_muti_choice()),
	handle_select_choice: () => dispatch(actions.add_select()),
	handle_add_date: () => dispatch(actions.add_date()),
	handle_add_file: () => dispatch(actions.add_file()),
	handle_add_text: () => dispatch(actions.add_text()),
	handle_add_textarea: () => dispatch(actions.add_textarea()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCustomize);