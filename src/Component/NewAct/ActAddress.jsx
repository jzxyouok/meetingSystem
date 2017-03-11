import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row">
				<Label htmlfor="address" name="活动地址"/>
				<div className="pc">
					<select><option value="">北京</option></select>
					<select><option value="">朝阳区</option></select>
				</div>
				<div className="detail">
					<input type="text" />
				</div>
			</div>
		)
	}
}