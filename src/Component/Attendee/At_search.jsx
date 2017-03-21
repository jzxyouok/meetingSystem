import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAttendeeTable } from '../../Config/apiUrl';
import { change_search, change_person } from '../../Redux/Action/Attendee/Attendee.action';
import store from '../../Redux/Store/store';

class Search extends Component {
	render() {
		const { handleConditionChange, get_person, words } = this.props;
		console.log(this.props);
		return (
			<div className="search">
				<input className="search_text" value={words} onChange={(e) => {
					handleConditionChange({words: e.target.value})
				}} placeholder="请输入搜索条件（人名/手机号）" />
				<div className="condition">
					<label htmlFor="search_condition">搜索条件</label>
					<select id="search_condition" onChange={(e) => handleConditionChange({search_type: e.target.value})}>
						<option value="">搜索条件</option>
						<option value="name">姓名</option>
						<option value="tel">手机号</option>
					</select>
					<label htmlFor="date">日期选择</label>
					<input type="date" className="begin_date" onChange={(e) => handleConditionChange({begin_date: e.target.value})}/>
					-
					<input type="date" className="end_date" onChange={(e) => handleConditionChange({end_date: e.target.value})}/>
				</div>
				<div className="search_button">
					<button onClick={get_person}>搜索</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	words: state.getIn(['search_condition', 'words']),
	search_type: state.getIn(['search_condition', 'search_type']),
	begin_date: state.getIn(['search_condition', 'begin_date']),
	end_date: state.getIn(['search_condition', 'end_date'])
});

const mapDispatchToProps = (dispatch) => ({
	handleConditionChange: (config) => dispatch(change_search(config)),
	get_person: (page) => dispatch(() => {
		const condition = store.getState().toJS().search_condition;
		const { page, words, search_type, begin_date, end_date, attendee_type } = condition;
		let queryString = `page=${page}&words=${words}&search_type=${search_type}&begin_date=${begin_date}&end_date=${end_date}&attendee_type=${attendee_type}`;
		fetch(getAttendeeTable + '?' + queryString)
		.then(res => res.json())
		.then(res => dispatch(change_person(res)));
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);