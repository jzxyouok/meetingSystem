import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<div className="search">
				<input className="search_text"/>
				<div className="condition">
					<label htmlFor="search_condition">搜索条件</label>
					<select id="search_condition">
						<option value="">搜索条件</option>
					</select>
					<label htmlFor="date">日期选择</label>
					<input type="date" className="begin_date"/>
					-
					<input type="date" className="end_date"/>
				</div>
				<div className="search_button">
					<button>搜索</button>
				</div>
			</div>
		)
	}
}