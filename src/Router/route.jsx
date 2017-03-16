import React from 'react';
import {Route, Router, hashHistory, IndexRedirect} from 'react-router';
import ApplicationForm from '../Component/AddNew/Index';
import NewAct from '../Component/NewAct/NewAct';
import Sidebar from '../Component/Sidebar/Index';
import NowAct from '../Component/NowAct/Index';
import Attendee from '../Component/Attendee/Index';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Sidebar}>
			<IndexRedirect to='/nowAct'></IndexRedirect>
			<Route path="/registerform" component={ApplicationForm}></Route>
			<Route path="/newAct" component={NewAct}></Route>
			<Route path="/nowAct" component={NowAct}></Route>
			<Route path="/attendee" component={Attendee}></Route>
		</Route>
	</Router>
);

export default routes;