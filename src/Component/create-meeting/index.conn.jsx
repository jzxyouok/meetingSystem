import * as actions from '../../Redux/Action/create-meeting.action';
import fetch from 'isomorphic-fetch';

export const mapStateToProps = (state) => ({
	name: state.getIn(['create_meeting', 'name']),
	reg_time: state.getIn(['create_meeting', 'reg_time']),
	address: state.getIn(['create_meeting', 'address']),
	detail_address: state.getIn(['create_meeting', 'detail_address']),
	official: state.getIn(['create_meeting', 'official']),
	act_type: state.getIn(['create_meeting', 'act_type']),
	poster: state.getIn(['create_meeting', 'poster']),
	details: state.getIn(['create_meeting', 'details']),
	init_state: state.getIn(['create_meeting', 'form_initial'])
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