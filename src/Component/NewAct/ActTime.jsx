import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row">
				<Label htmlfor="time" name="活动时间"/>
				<div className="begin">
					<Label htmlfor="begin_time" name="开始时间"/>
					<input type="date" id="beigin_time" />
				</div>
				<div className="end">
					<Label htmlfor="end_time" name="结束时间"/>
					<input type="date" id="end_time" />
				</div>
			</div>
		)
	}
}