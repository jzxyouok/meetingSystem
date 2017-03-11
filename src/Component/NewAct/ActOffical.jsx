import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row addOffical">
				<Label htmlfor="offical" name="主办　方"/>
				<select id="offical"><option value="">选择主办方</option></select>
				<button>添加主办方</button>
			</div>
		)
	}
}