import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row addCatefory">
				<Label htmlfor="catogery" name="活动分类"/>
				<select id="offical"><option value="">选择活动分类</option></select>
				<button>添加活动分类</button>
			</div>
		)
	}
}