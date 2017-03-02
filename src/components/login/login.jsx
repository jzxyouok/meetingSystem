import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../scss/login/login.scss';
import fetch from 'isomorphic-fetch';

export class Forms extends Component {	
	render() {
		const {checked, isWarningShow, warningWords, handleCheck, handleSubmit} = this.props;

		return <form>
			<img src="http://www.bagevent.com/resources/img/logo_normal.png" alt="logo"/>
			<p className='loginTitle'>登录</p>
			<div className='inputGroup'>
				<input type="text" ref="account" className='account' placeholder="账号"/>
			</div>
			<div className='inputGroup'>
				<input type="password" ref="password" className='password' placeholder="密码"/>
				<span className='warning' style={{display: isWarningShow ? 'block' : 'none'}}>{warningWords}</span>
			</div>
			<div className='remeber'>
				<input type="checkbox" checked={checked} onChange={handleCheck} id="remember"/>
				<label htmlFor="remember">记住我</label>
			</div>
			<button 
				type="submit" 
				onClick={(e) => handleSubmit.call(null, e, this.refs.account.value.trim(), this.refs.password.value.trim()) }
			>登录</button>
		</form>
	}
}