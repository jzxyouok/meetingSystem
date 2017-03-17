import React, {Component} from 'react';
import {connect} from 'react-redux';

import Label from './Label';
import {act_details} from '../../Redux/Action/NewAct/NewAct.action';

class ActDetails extends Component {
	render() {
		const {details, chang_details} = this.props;
		return (
			<div className="row">
				<Label htmlfor="actDetails" name="会议详情"/>
				<textarea id="actDetails" cols="30" rows="10" onChange={(e) => chang_details(e.target.value)}></textarea>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	details: state.getIn(['createAct', 'act_details', 'act_details'])
})

const mapDispatchToProps = (dispatch) => ({
	chang_details: (value) => dispatch(act_details(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActDetails);
