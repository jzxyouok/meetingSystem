import React, {Component} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { c_at_type } from '../../Redux/Action/Attendee/Attendee.action';
import { getAllRegister } from '../../Config/apiUrl';


class Operate extends Component {
	render() {
		const { attendee_type, change_type, getAllRegister } = this.props;

		return (
			<div className="operate">
				<div className="attend_type">
					<div 
						className={attendee_type === 'all' ? `all active` : `all`}
						onClick={change_type.bind(null, 'all')}>
						参会人员(0)
					</div>
					<div 
					className={attendee_type === 'no_check' ? `no_check active` : `no_check`}
					onClick={change_type.bind(null, 'no_check')}>
					未审核(0)
					</div>
				</div>
				<div className="in_output">
					<a href="javascript:;" onClick={getAllRegister}>添加参会人员</a>
					<a href="javascript:;">导出所有报名人员</a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	attendee_type: state.get('attendee_type')
});

const mapDispatchToProps = (dispatch) => ({
	change_type: (val) => dispatch(c_at_type(val)),
	getAllRegister: () => dispatch(() => {
		$('body').append(`<iframe src="${getAllRegister}" style="display: none"></iframe>`);
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Operate);