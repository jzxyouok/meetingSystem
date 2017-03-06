import React, {Component} from 'react';
import '../../scss/admin/addnewact.scss';

import {Form} from 'react-bootstrap';
import ActName from './ActName';
import ActTime from './ActTime';
import ActAddress from './ActAddress';
import ActDetailAddress from './ActDetailAddress';
import ActOffical from './ActOffical';
import ActCategory from './ActCategory';
import ActPoster from './ActPoster';
import ActDetail from './ActDetail';
import ActTag from './ActTag';
import ActSubmit from './ActSubmit';

export default class AddNewActForm extends Component {
	render() {
		return (
			<div className="newAct">
				<Form horizontal>
					<span className="form-title">活动信息</span>
					<ActName />
					<ActTime />
					<ActAddress />
					<ActDetailAddress />
					<ActOffical />
					<ActCategory />
					<ActPoster />
					<ActDetail />
					<ActTag />
					<ActSubmit />
				</Form>
			</div>
		)
	}
}

