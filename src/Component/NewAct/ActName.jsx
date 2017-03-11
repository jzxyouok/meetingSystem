import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row">
				<Label htmlfor="name" name="活动名称"/>
				<input type="text" id="name" />
			</div>
		)
	}
}