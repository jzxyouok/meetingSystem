import React, {Component} from 'react';
import ActItem from './ActItem';
import '../../Style/NowAct.scss';

export default class NowAct extends Component {
	render() {
		return (
			<div className="nowAct">
				<ActItem />
				<ActItem />
				<ActItem />
			</div>
		)
	}
}