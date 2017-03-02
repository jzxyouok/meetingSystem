import store from '../store/loginStore';
import {check, wshow, wwords} from '../actions/loginAction';
import {connect, Provider} from 'react-redux';
import fetch from 'isomorphic-fetch';
import {Forms} from '../components/login/login';
import React from 'react';

const mapStateToProps = (state) => ({
	checked: state.checked,
	isWarningShow: state.isWarningShow,
	warningWords: state.warningWords
});

const mapDispatchToProps = (dispatch) => ({
	handleCheck: () => dispatch(check),
	handleSubmit: (event, account, password) => {
		event.preventDefault();
		if(account === '') {
			dispatch(wshow(true));
			dispatch(wwords('请输入用户名!!'));
			return;
		}
		if(password === '') {
			dispatch(wshow(true));
			dispatch(wwords('请输入密码!!'));
			return;
		}
		dispatch((dispatch) => {
			const apipath = '/models/mock/login.json';
			fetch(apipath, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					account,
					password,
				})
			})
			.then(res => res.json())
			.then(res => {
				if(res.code === 1) {
					location.href = 'index.html';
				} else if(res.code === 2) {
					dispatch(wshow(true));
					dispatch(wwords(res.message));
				}
			})
			.catch(err => {
				dispatch(wshow(true));
				dispatch(wwords('网络错误，请稍后重试！！'));
			})
		})
	}
});

export const FormsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Forms);