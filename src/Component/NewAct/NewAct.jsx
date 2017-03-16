import React, {Component} from 'react';
import '../../Style/NewAct.scss';
import ActName from './ActName';
import RegisterTime from './RegisterTime';
import ActTime from './ActTime';
import ActAddress from './ActAddress';
import ActOffical from './ActOffical';
import ActCategory from './ActCategory';
import ActPoster from './ActPoster';
import ActDetails from './ActDetails';
import ActSubmit from './ActSubmit';

class NewAct extends Component {
	render() {
		return <form accept="image/*" encType="multipart/form-data" className="newAct">
			<p className="title">会议信息</p>
			<ActName />
			<RegisterTime />
			<ActTime />
			<ActAddress />
			<ActOffical />
			<ActCategory />
			<ActPoster />
			<ActDetails />
			<ActSubmit />
		</form>
	}
}
export default NewAct;