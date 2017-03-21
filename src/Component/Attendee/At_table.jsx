import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import { getAttendeeTable } from '../../Config/apiUrl';
import { change_person } from '../../Redux/Action/Attendee/Attendee.action';
import store from '../../Redux/Store/store';

class Search extends Component {
	componentDidMount() {
		const { get_person } = this.props;
		get_person();
	}
	render() {
		const { table_person } = this.props;
		const { head, body, now_page, total_page } = table_person;
		const pagination = [];
		if(now_page === 1) {
			pagination[0] = <a href="javascript:;" key={0} className="next">下一页</a>;
		} else if (now_page === total_page) {
			pagination[0] = <a href="javascript:;" key={1} className="prev">上一页</a>;
		} else {
			pagination[0] = <a href="javascript:;" key={0} className="prev">上一页</a>;
			pagination[1] = <a href="javascript:;" key={1} className="next">下一页</a>;
		}
		return (
			<div className="attendee_table">
				<div className="table">
					<table>
						<thead>
							<tr>
								{
									head.map((item,index) => <th key={index}>{item}</th>)
								}
							</tr>
						</thead>
						<tbody>
						{
							body.map((row, rowIdx) => {
								return <tr key={rowIdx}>
									{
										row.map((el, elIdx) => <td key={elIdx}>{el}</td>)
									}
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				<div className="pagination">{pagination}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	table_person: state.get('table_person').toJS()
});

const mapDispatchToProps = (dispatch) => ({
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