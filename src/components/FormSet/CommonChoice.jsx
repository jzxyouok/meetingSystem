import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import CommonChoiceButton from './CommonChoiceButton';

class CommonChoice extends Component {
	render() {
		const buttonDes = ['姓名', '手机号', '性别', '照片', '与会类型', '上衣尺寸', '交通方式', '航班/列车号', '到站地点', '到站时间', '餐饮住宿', '饮食偏好', '返程方式', '送机/站时间', '备注'];
		let arr = buttonDes.map((item, index) => <CommonChoiceButton buttonDes={item} key={`btn-${index}`} />);
		return (
			<div className="common-choice">
				<p className='toolboxTitle'>常用选项</p>
				<div className='commons'>
					{arr}
				</div>
			</div>
		)
	}
}

export default CommonChoice;