import React, {Component} from 'react';
import {connect} from 'react-redux';
import Label from './Label';
import {act_begin_time, act_end_time} from '../../Redux/Action/NewAct/NewAct.action';

class ActTime extends Component {
	render() {
		const {act_begin_time, act_end_time, change_begin_time, change_end_time} = this.props;
		return (
			<div className="row">
				<Label htmlfor="time" name="会议时间"/>
				<div className="begin">
					<Label htmlfor="begin_time" name="开始时间"/>
					<input type="date" value={act_begin_time} id="beigin_time" onChange={(e) => change_begin_time(e.target.value)} />
				</div>
				<div className="end">
					<Label htmlfor="end_time" name="结束时间"/>
					<input type="date" value={act_end_time} id="end_time" onChange={(e) => change_end_time(e.target.value)} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	act_begin_time: state.getIn(['createAct', 'act_begin_time', 'begin_time']),
	act_end_time: state.getIn(['createAct', 'act_end_time', 'end_time'])
})

const mapDispatchToProps = (dispatch) => ({
	change_begin_time: (value) => dispatch(act_begin_time(value)),
	change_end_time: (value) => dispatch(act_end_time(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActTime);
