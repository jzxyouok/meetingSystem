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
		let {act_begin_time, register_begin_time,register_end_time, act_category, 
			act_city, act_detail_address, act_details, act_end_time,
			act_name, act_official, act_poster, act_province} = state;


		if(act_name.name === '') {
			alert('请输入会议主题');
			return;
		}

		if(register_begin_time.time === '') { 
			alert('请选择报名开始时间');
			return;
		}

		if(register_end_time.time === '') { 
			alert('请选择报名结束时间');
			return;
		}

		if(act_begin_time.begin_time === '') { 
			alert('请选择会议开始时间');
			return;
		}

		if(act_end_time.end_time === '') { 
			alert('请选择会议结束时间');
			return;
		}

		if(act_city.city === '' || act_province.province === '') { 
			alert('请选择地址');
			return;
		}

		if(act_detail_address.detail_address === '') {
			alert('请输入详细地址');
			return;
		}

		if(act_official.official === '') {
			alert('请输入会议主办方');
			return;
		}

		if(act_category.category === '') { 
			alert('请选择会议分类');
			return;
		}

		if(act_poster.poster === '') {
			alert('请上传会议海报');
			return;
		}

		if(act_details.act_details === '') {
			alert('请输入会议详细信息');
			return;
		}

		let formData = new FormData();
		formData.append('register_begin_time', register_begin_time.time);
		formData.append('register_end_time', register_end_time.time);
		formData.append('begin_time', act_begin_time.begin_time);
		formData.append('end_time', act_end_time.end_time);
		formData.append('category', act_category.category);
		formData.append('city', act_city.city);
		formData.append('address', act_detail_address.detail_address);
		formData.append('details', act_details.act_details);
		formData.append('title', act_name.name);
		formData.append('official', act_official.official);
		formData.append('image', act_poster.poster);
		formData.append('province', act_province.province);

		fetch(newActUrl, {
			method: 'post',
			headers: {
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
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