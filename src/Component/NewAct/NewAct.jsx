import React, {Component} from 'react';
import '../../Style/NewAct.scss';
import ActName from './ActName';
import ActTime from './ActTime';
import ActAddress from './ActAddress';
import ActOffical from './ActOffical';
import ActCategory from './ActCategory';
import ActPoster from './ActPoster';
import ActDetails from './ActDetails';
import ActSubmit from './ActSubmit';

class NewAct extends Component {
	render() {
		return <div className="newAct">
			<p className="title">活动信息</p>
			<ActName />
			<ActTime />
			<ActAddress />
			<ActOffical />
			<ActCategory />
			<ActPoster />
			<ActDetails />
			<ActSubmit />
		</div>
	}
}
export default NewAct;