import {render} from 'react-dom';
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
 
// import NavBar from './components/admin/NavBar';
// import styles from './scss/admin/admin.scss';

import AddNewAct from './components/addNewAct/AddNewAct';

render(<AddNewAct />, document.getElementById('app'));