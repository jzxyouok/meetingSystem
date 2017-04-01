import React, { Component } from 'react';
import { connect } 			from 'react-redux';
import store 				from '../../Redux/Store/store';
import fetch 				from 'isomorphic-fetch';
import { post_data } 		from '../../Resource/util/utils';
import { Button, Row, Col, message } 		from 'antd';
import { submitFormUrl, getRegisterForm } 	from '../../Config/apiUrl';

const button_layout = {
	xs: { offset: 0 },
	sm: { offset: 4 }
};

class RegisterFormHandler extends Component {
	componentDidMount() {
		// 组件加载完成，请求数据
		const { get, id } = this.props;
		get(id);
	}
	render() {
		const { save, publish, id } = this.props;
		return (
			<Row>
				<Col {...button_layout} className="button-handler">
					<Button type="primary" onClick={save.bind(this, id)}>保存草稿</Button>
					<Button type="primary" onClick={publish.bind(this, id)}>立即发布</Button>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	// 请求数据接口
	get: (id) => dispatch(() => {
		fetch(getRegisterForm+`?id=${id}`)
			.then(res => res.json())
			.then(res => console.log(res))
			.catch(err => message.error('网络异常，请稍后重试，或联系系统管理员'));
	}),

	// 保存草稿接口
	save: (id) => dispatch(() => {
		const state = store.getState().toJS().register_form;
		
		post_data(submitFormUrl, `id=${id}&status=0&form_data=${JSON.stringify(state)}`)
		.then(res => {
			if(res.code === 1) {
				message.success(res.message);
			} else {
				message.warn('网络异常，请稍后重试');
			}
		})
		.catch(err => message.error('网络异常，请稍后重试，或联系系统管理员'));
	}),

	// 发布报名表单接口
	publish: (id) => dispatch(() => {
		const state = store.getState().toJS().register_form;
		
		post_data(submitFormUrl, `id=${id}&status=1&form_data=${JSON.stringify(state)}`)
		.then(res => {
			if(res.code === 1) {
				message.success(res.message);
			} else {
				message.warn('网络异常，请稍后重试');
			}
		})
		.catch(err => message.error('网络异常，请稍后重试，或联系系统管理员'));
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterFormHandler);