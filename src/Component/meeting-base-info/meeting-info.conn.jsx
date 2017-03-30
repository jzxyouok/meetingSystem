import * as actions from '../../Redux/Action/meeting-base-info.action';

export const mapStateToProps = (state) => ({
	title: state.getIn(['base_info', 'title']),
	reg_time: state.getIn(['base_info', 'reg_time']),
	meeting_time: state.getIn(['base_info', 'meeting_time']),
	address: state.getIn(['base_info', 'address']),
	detail_address: state.getIn(['base_info', 'detail_address']),
	official: state.getIn(['base_info', 'official']),
	category: state.getIn(['base_info', 'category']),
	poster: state.getIn(['base_info', 'poster']),
	details: state.getIn(['base_info', 'details']),
	init_state: state.getIn(['base_info', 'form_initial']),
	state: state.getIn(['base_info', 'state'])
});

export const mapDispatchToProps = (dispatch) => ({
	update_title: (val) => dispatch( actions.update_title(val) ),
	update_reg_time: (val) => dispatch( actions.update_reg_time(val) ),
	update_meeting_time: (val) => dispatch( actions.update_meeting_time(val) ),
	update_address: (val) => dispatch( actions.update_address(val) ),
	update_detail_address: (val) => dispatch( actions.update_detail_address(val) ),
	update_official: (val) => dispatch( actions.update_official(val) ),
	update_type: (val) => dispatch( actions.update_type(val) ),
	update_poster: (val) => dispatch( actions.update_poster(val) ),
	update_details: (val) => dispatch( actions.update_details(val) ),
	init_form: (val) => dispatch( actions.init_form(val) ),
});