import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row">
				<Label htmlfor="actDetails" name="活动详情"/>
				<textarea id="actDetails" cols="30" rows="10"></textarea>
			</div>
		)
	}
}