import React, {Component} from 'react';
import {render} from 'react-dom';
import styles from '../../scss/login/login.scss';
import {getCookie, setCookie, delCookie} from '../../utils/handleCookie';

export class Forms extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckedChange = this.handleCheckedChange.bind(this);

		this.state = {
			checked: true,
			isWarningShow: true,
			warningWords: ''
		}
	}

	handleCheckedChange() {
		this.setState({
			checked: !this.state.checked
		})
	}
	
	handleSubmit(e) {
		e.preventDefault();

		const account = this.refs.account.value.trim();
		const password = this.refs.password.value.trim();

		if(account === '') {
			this.setState({
				isWarningShow: true,
				warningWords: '请输入用户名！！'
			});
			return;
		}

		if(password === '') {
			this.setState({
				isWarningShow: true,
				warningWords: '请输入密码！！'
			});
			return;
		}

		fetch('/models/mock/login.json', {
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
				setCookie('account', account, 24);
				location.href = 'index.html';
			} else if(res.code === 2) {
				this.setState({
					isWarningShow: true,
					warningWords: res.message
				});
			}
		})
		.catch(err => {
			this.setState({
				isWarningShow: true,
				warningWords: '网络错误，请稍后重试！！'
			});
		})
	}

	componentDidMount() {
		const account = getCookie('account') || '';
		this.refs.account.value = account;
	}
	
	render() {
		const {checked, isWarningShow, warningWords} = this.state;

		return <form>
			<img src="http://www.bagevent.com/resources/img/logo_normal.png" alt="logo"/>
			<p className={styles.loginTitle}>登录</p>
			<div className={styles.inputGroup}>
				<input type="text" ref="account" className={styles.account} placeholder="账号"/>
			</div>
			<div className={styles.inputGroup}>
				<input type="password" ref="password" className={styles.password} placeholder="密码"/>
				<span className={styles.warning} style={{display: isWarningShow ? 'block' : 'none'}}>{warningWords}</span>
			</div>
			<div className={styles.remeber}>
				<input type="checkbox" checked={checked} onChange={this.handleCheckedChange} id="remember"/>
				<label htmlFor="remember">记住我</label>
			</div>
			<button type="submit" onClick={this.handleSubmit}>登录</button>
		</form>
	}
}