import React, { Component } 		from 'react';
import { Row, Col, Button, Icon } 	from 'antd';
import { connect } 					from 'react-redux';

import * as actions 				from '../../Redux/Action/register-form.action'; 

const AddCustomize = (props) => (
	<Row className="add-customize">
		<Col offset={4}>
			<Button onClick={props.handle_single_choice}><Icon type="plus" />单选</Button>
			<Button><Icon type="plus" />多选</Button>
			<Button><Icon type="plus" />下拉框</Button>
			<Button><Icon type="plus" />日期</Button>
			<Button><Icon type="plus" />文件</Button>
			<Button><Icon type="plus" />普通文本框</Button>
			<Button><Icon type="plus" />多行文本框</Button>
		</Col>
	</Row>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	handle_single_choice: () => dispatch(actions.add_single_choice())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCustomize);