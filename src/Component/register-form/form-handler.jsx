import React, { Component } from 'react';
import { connect } 			from 'react-redux';
import store 				from '../../Redux/Store/store';
import fetch 				from 'isomorphic-fetch';
import { post_data } 		from '../../Resource/util/utils';
import * as AC				from '../../Redux/Action/register-form.action';
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
		const { save, publish, id, status } = this.props;
		return (
			<Row>
				<Col {...button_layout} className="button-handler">
					{
						status === 0 ? <Button type="primary" onClick={save.bind(this, id)}>保存草稿</Button> : ''
					}
					<Button type="primary" onClick={publish.bind(this, id)}>{status === 0 ? '立即发布' : '修改报名表'}</Button>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({
	status: state.getIn(['register_form', 'status'])
});

const mapDispatchToProps = (dispatch) => ({
	// 请求数据接口
	get: (id) => dispatch(() => {
		fetch(getRegisterForm+`?id=${id}`)
			.then(res => res.json())
			.then(res => {
				if(res.code === 1) {
					const form_data = JSON.parse(res.message.form_data);
					const { custom, customize } = form_data;
					dispatch( AC.update_custom_option(custom) );
					dispatch( AC.update_form_state(+res.message.status) );
					customize.forEach((item, index) => {
						const { title, options, name } = item;
						switch(item.option_type) {
							case 'radio':
								dispatch( AC.add_single_choice(index, title, options ,name ) );
								break;
							case 'checkbox':
								dispatch( AC.add_muti_choice(index, title, options ,name) );
								break;
							case 'select':
								dispatch( AC.add_select(index, title, options ,name) );
								break;
							case 'date':
								dispatch( AC.add_date(index, title, name) );
								break;
							case 'file':
								dispatch( AC.add_file(index, title, name) );
								break;
							case 'text':
								dispatch( AC.add_text(index, title, name) );
								break;
							case 'textarea':
								dispatch( AC.add_textarea(index, title, name) );
								break;
							default:
								break;
						}
					})
				}
			})
			.catch(err => console.error(err));
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