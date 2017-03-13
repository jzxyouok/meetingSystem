import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import store from '../../Redux/Store/store';
import {newActUrl} from '../../Config/apiUrl';

class ActSubmit extends Component {
	render() {
		const {submit} = this.props;
		return (
			<div className="row save">
				<button onClick={e => {
					e.preventDefault();
					submit();
				}}>立即保存</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	submit: () => dispatch(() => {
		let state = store.getState().toJS();
		console.log(state);
		let {act_begin_time, act_category, act_city, act_detail_address, act_details, act_end_time,
			act_name, act_official, act_poster, act_province} = state;
		let formData = new FormData();
		formData.append('begin_time', act_begin_time.begin_time);
		formData.append('act_category', act_category.category);
		formData.append('act_city', act_city.city);
		formData.append('act_detail_address', act_detail_address.detail_address);
		formData.append('act_details', act_details.details);
		formData.append('act_end_time', act_end_time.end_time);
		formData.append('act_name', act_name.name);
		formData.append('act_official', act_official.official);
		formData.append('act_poster', act_poster.poster);
		formData.append('act_province', act_province.province);

		fetch(newActUrl, {
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formData
		})
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(err => {
			throw new Error(err);
		})
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActSubmit);