import React, {Component} from 'react';
import {render} from 'react-dom';
import styles from './scss/login/login.scss';
import {getCookie, setCookie, delCookie} from './utils/handleCookie';
import {Forms} from './components/login/login.jsx'

render(<Forms />, document.getElementById('app'));