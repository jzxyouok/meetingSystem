import React, {Component} from 'react';
import CommonChoice from './CommonChoice';
import CustomizeOption from './CustomizeOption';

export default class ToolBox extends Component {
	render() {
		return (
			<div className='toolbox'>
				<CommonChoice />
				<CustomizeOption />
			</div>
		)
	}
}