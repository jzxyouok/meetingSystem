import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Nav from '../Component/nav/Index';
import MeetingList from '../Component/meeting-list/Index';
import CreateMeeting from '../Component/create-meeting/Index';


const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Nav}>
			<Route path="meeting-list" component={MeetingList}></Route>
			<Route path="create-meeting" component={CreateMeeting}></Route>
		</Route>
	</Router>
)

export default router;