import React, { Component } 		from 'react';
import { Row, Col, Button, Icon, Modal, Input
								} 	from 'antd';
import { connect } 					from 'react-redux';

import * as actions 				from '../../Redux/Action/register-form.action'; 

class LinkageInputGroup extends Component {
	render() {
		return (
			<div className="linkage-input">
				<Row>
					<Col span={6}>联动项标题</Col>	
					<Col span={18}>
						<Input data-id={Date.now()} placeholder="请输入联动项标题" />
					</Col>
				</Row>
				<Row>
					<Col span={6}>联动项的可取值</Col>	
					<Col span={18}>
						<Input placeholder="请输入联动项的可取值" />
					</Col>
				</Row>
				<Row>
					<Col span={18} offset={6}>
						<Button type="primary">暂存</Button>
						<Button type="primary">提交</Button>
					</Col>
				</Row>
			</div>
		)
	}
}

class AddCustomize extends Component {
	state = {
		linkageModalShow: false
	}
	// 显示联动选项模态框
	toggleLinkageModalShow = (e) => {
		this.setState({
			linkageModalShow: !this.state.linkageModalShow
		})
	}
	// 隐藏联动选项模态框

	render() {
		return (
			<Row className="add-customize">
				<Modal 
					visible={this.state.linkageModalShow} 
					onCancel={this.toggleLinkageModalShow}
					title="添加联动规则">
					<Button type="primary">添加选项</Button>
					<LinkageInputGroup />
				</Modal>
				<Col offset={4}>
					<Button onClick={this.props.handle_single_choice}><Icon type="plus" />单选</Button>
					<Button onClick={this.props.handle_muti_choice}><Icon type="plus" />多选</Button>
					<Button onClick={this.props.handle_select_choice}><Icon type="plus" />下拉框</Button>
					<Button onClick={this.props.handle_add_date}><Icon type="plus" />日期</Button>
					<Button onClick={this.props.handle_add_file}><Icon type="plus" />文件</Button>
					<Button onClick={this.props.handle_add_text}><Icon type="plus" />普通文本框</Button>
					<Button onClick={this.props.handle_add_textarea}><Icon type="plus" />多行文本框</Button>
					<Button onClick={this.toggleLinkageModalShow}><Icon type="plus" />添加联动选择项</Button>
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
	handle_linkage: () => dispatch(actions.add_textarea()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCustomize);