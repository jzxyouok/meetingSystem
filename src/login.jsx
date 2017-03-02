import React, {Component} from 'react';
import {render} from 'react-dom';
import {FormsContainer} from './redux/loginRedux';
import {Provider} from 'react-redux';
import {store} from './store/loginStore';

render(<Provider store={store}><FormsContainer /></Provider>, document.getElementById('app'));