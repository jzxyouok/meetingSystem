import React, {Component} from 'react';

import '../../Style/Attendee.scss';
import Operator from './At_operate';
import Search from './At_search';
import Table from './At_table';

export default class Attendee extends Component {
	render() {
		return (
			<div className="attendee">
				<Operator />
				<Search />
				<Table />
			</div>
		)
	}
}