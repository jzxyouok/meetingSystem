import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import Routes from './Router/router';
import store from './Redux/Store/store';

render((
	<Provider store={store}>
		{Routes}
	</Provider>
), document.getElementById('app'));