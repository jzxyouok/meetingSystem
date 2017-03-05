import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import NavBar from '../components/navBar/navBar';
import AddNewActForm from '../components/addNewAct/addNewAct';
import ActList from '../components/activityList/index';
import BaseInfo from '../components/BaseInfo/BaseInfo';
import AttendInfo from '../components/AttendInfo/AttendInfo';
import Register from '../components/FormSet/registerForm';

const routes = (
	<Route path="/" component={NavBar}>
		<IndexRoute component={ActList}></IndexRoute>
		<Route path="addNew" component={AddNewActForm}></Route>
		<Route path="baseInfo" component={BaseInfo}></Route>
		<Route path="meetingManager" component={ActList}></Route>
		<Route path="attendees" component={AttendInfo}></Route>
		<Route path="registerForm" component={Register}></Route>
	</Route>
);

const Index = () => <Router routes={routes} history={hashHistory}></Router>;

export default Index;