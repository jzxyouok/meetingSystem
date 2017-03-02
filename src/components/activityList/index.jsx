import React, {Component} from 'react';

import '../../scss/admin/actList.scss';
import ActItem from './actItem';
import PageControl from './PageControl';

class ActList extends Component {
	render() {
		return (
			<div className="actList">
				<ActItem />
				<ActItem />
				<ActItem />
				<ActItem />
				<PageControl />
			</div>
		)
	}
}

export default ActList;