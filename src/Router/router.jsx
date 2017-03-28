import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Nav from '../Component/nav/Index';
import MeetingList from '../Component/meeting-list/Index';
import CreateMeeting from '../Component/create-meeting/Index';

import Attendee from '../Component/attendee/Index';
import RegisterForm from '../Component/register-form/Index';
import BaseInfo from '../Component/meeting-base-info/Index';
import Checkin from '../Component/checkin/Index';
import Support from '../Component/support/Index';
import Setting from '../Component/setting/Index';
import Notice from '../Component/meeting-notice/Index';


const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Nav}>
			<IndexRoute component={MeetingList}></IndexRoute>
			<Route path="meeting-list" component={MeetingList}></Route>
			<Route path="create-meeting" component={CreateMeeting}></Route>
			<Route path="/:id">
				<Route path="attendee" component={Attendee}></Route>
				<Route path="register-form" component={RegisterForm}></Route>
				<Route path="base-info" component={BaseInfo}></Route>
				<Route path="checkin" component={Checkin}></Route>
				<Route path="support" component={Support}></Route>
				<Route path="setting" component={Setting}></Route>
				<Route path="notice" component={Notice}></Route>
			</Route>
		</Route>
	</Router>
)

export default router;