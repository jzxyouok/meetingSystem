import React from 'react';
import {Route, Router, hashHistory, IndexRedirect} from 'react-router';
import ApplicationForm from '../Component/AddNew/Index';
import NewAct from '../Component/NewAct/NewAct';
import Sidebar from '../Component/Sidebar/Index';
import NowAct from '../Component/NowAct/Index';
import Attendee from '../Component/Attendee/Index';
import Checkin from '../Component/Checkin/Index';
import Support from '../Component/Support/Index';
import Setting from '../Component/Setting/Index';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Sidebar}>
			<IndexRedirect to='/nowAct'></IndexRedirect>
			<Route path="/newAct" component={NewAct}></Route>
			<Route path="/nowAct" component={NowAct}></Route>
			<Route path="/:id">
				<Route path="attendee" component={Attendee}></Route>
				<Route path="registerform" component={ApplicationForm}></Route>
				<Route path="baseInfo" component={NewAct}></Route>
				<Route path="checkin" component={Checkin}></Route>
				<Route path="support" component={Support}></Route>
				<Route path="setting" component={Setting}></Route>
			</Route>
		</Route>
	</Router>
);

export default routes;