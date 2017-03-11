import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import ApplicationForm from '../Component/AddNew/Index';
import NewAct from '../Component/NewAct/NewAct';

const routes = (
	<Router history={hashHistory}>
		<Route path="/">
			<Route path="/registerform" component={ApplicationForm}></Route>
			<Route path="/newAct" component={NewAct}></Route>
		</Route>
	</Router>
);

export default routes;