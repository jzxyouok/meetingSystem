import React, {Component} from 'react';

import '../../scss/admin/actList.scss';
import ActItem from './actItem';

class ActList extends Component {
	render() {
		return (
			<div className="actList">
				<ActItem />
				<ActItem />
				<ActItem />
				<ActItem />
			</div>
		)
	}
}

export default ActList;