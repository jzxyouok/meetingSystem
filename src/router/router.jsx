import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import NavBar from '../components/navBar/navBar';
import AddNewActForm from '../components/addNewAct/addNewAct';
import ActList from '../components/activityList/index';

const routes = (
	<Route path="/" component={NavBar}>
		<IndexRoute component={ActList}></IndexRoute>
		<Route path="addNew" component={AddNewActForm}></Route>
		<Route path="meetingManager" component={ActList}></Route>
	</Route>
);

const Index = () => <Router routes={routes} history={hashHistory}></Router>;

export default Index;