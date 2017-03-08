import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

import './Style/Common.css';
import routes from './Router/route';
import store from './Redux/Store/store';


render((
	<Provider store={store}>
		{routes} 
	</Provider>
), document.getElementById('app'));