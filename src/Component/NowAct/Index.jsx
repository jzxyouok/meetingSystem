import React, {Component} from 'react';
import ActItem from './ActItem';
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';

import '../../Style/NowAct.scss';
import {getActList} from '../../Config/apiUrl';
import {meeting_list} from '../../Redux/Action/current-meeting/current-meeting.action';

class NowAct extends Component {
	componentDidMount() {
		const {get_meeting_list} = this.props;
		get_meeting_list();
	}
	render() {
		const {meeting_list} = this.props;
		return (
			<div className="nowAct">
				{
					meeting_list.map((item, index) => {
						return <ActItem 
							address={item.address}
							end_time={item.end_time}
							id={item.id}
							image={item.image}
							publisher={item.publisher}
							registertime={item.registertime}
							state={item.state}
							title={item.title}
							key={item.id}
						/>
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	meeting_list: state.get('current_meeting_list')
});

const mapDispatchToProps = (dispatch) => ({
	get_meeting_list: () => dispatch(() => {
		fetch(getActList)
			.then(res => res.json())
			.then(res => {
				dispatch(meeting_list(res.message))
			})
			.catch(err => console.log(err));
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NowAct);