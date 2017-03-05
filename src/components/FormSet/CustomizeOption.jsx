import React, {Component} from 'react';
import CustomizeOptionLi from './CustomizeOptionLi';
export default class CustomizeOption extends Component {
	render() {
		const handlers = ['普通文本框', '多行文本框', '日期', '单选', '多选', '下拉选择框', '地区'];
		const handlerArr = handlers.map((item, index) => <CustomizeOptionLi liDes={item} key={`handler-${index}`} />);
		return  (
			<div className="customizeOption">
				<p className='toolboxTitle'>自定义项</p>
				<ul className='customizeOptions'>
					{handlerArr}
				</ul>
			</div>
		)
	}
}