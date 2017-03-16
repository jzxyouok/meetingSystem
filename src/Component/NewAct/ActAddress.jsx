import React, {Component} from 'react';
import {connect} from 'react-redux';

import Label from './Label';
import {act_province, act_city, act_detail_address} from '../../Redux/Action/NewAct/NewAct.action';

class ActAddress extends Component {
	render() {
		const {province, city, detail_address, 
				change_province, change_city, change_detail_address } = this.props;
		return (
			<div className="row">
				<Label htmlfor="address" name="会议地址"/>
				<div className="pc">
					<select onChange={(e) => change_province(e.target.value)}>
						<option value="1">北京</option>
						<option value="2">北京1</option>
						<option value="3">北京2</option>
					</select>
					<select onChange={(e) => change_city(e.target.value)}>
						<option value="1">朝阳区1</option>
						<option value="2">朝阳区2</option>
						<option value="3">朝阳区3</option>
					</select>
				</div>
				<div className="detail">
					<input type="text" value={detail_address} onChange={(e) => change_detail_address(e.target.value)} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	province: state.getIn(['act_province', 'province']),
	city: state.getIn(['act_city', 'city']),
	detail_address: state.getIn(['act_detail_address', 'detail_address']),
})

const mapDispatchToProps = (dispatch) => ({
	change_province: (province) => dispatch(act_province(province)),
	change_city: (city) => dispatch(act_city(city)),
	change_detail_address: (detail_address) => dispatch(act_detail_address(detail_address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ActAddress);











