import React, {Component} from 'react';
import {render} from 'react-dom';
 
import IndexContainerProvider from './redux/index.redux';

render(<IndexContainerProvider />, document.getElementById('app'));