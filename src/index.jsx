import {render} from 'react-dom';
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
 
import Forms from './components/FormSet/registerForm';

render(<Forms />, document.getElementById('app'));