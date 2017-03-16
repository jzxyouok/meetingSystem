import React, {Component} from 'react';
import {connect} from 'react-redux';
import Label from './Label';
import {register_begin_time, register_end_time} from '../../Redux/Action/NewAct/NewAct.action';

class RegisterTime extends Component {
	render() {
		const {register_begin_time, register_end_time, change_register_begin_time, change_register_end_time} = this.props;
		return (
			<div className="row">
				<Label htmlfor="time" name="报名时间"/>
				<div className="begin">
					<Label htmlfor="register_begin_time" name="开始时间"/>
					<input type="date" value={register_begin_time} id="register_begin_time" onChange={(e) => change_register_begin_time(e.target.value)} />
				</div>
				<div className="end">
					<Label htmlfor="register_end_time" name="结束时间"/>
					<input type="date" value={register_end_time} id="register_end_time" onChange={(e) => change_register_end_time(e.target.value)} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	register_begin_time: state.getIn(['register_begin_time', 'time']),
	register_end_time: state.getIn(['register_end_time', 'time']),
})

const mapDispatchToProps = (dispatch) => ({
	change_register_begin_time: (value) => dispatch(register_begin_time(value)),
	change_register_end_time: (value) => dispatch(register_end_time(value)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterTime);