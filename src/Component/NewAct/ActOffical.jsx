import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';

import Label from './Label';
import { show_add_offical_modal, act_official } from '../../Redux/Action/NewAct/NewAct.action';
import { getOfficial, setOfficial } from '../../Config/apiUrl';

class ActOfficalModal extends Component {

	handleAddOfficial(e) {
		const {add_official} = this.props;
		e.preventDefault();
		let official = this.refs.official.value;
		add_official(official);
	}
	render() {
		const overlay = {
			position          : 'fixed',
		    top               : 0,
		    left              : 0,
		    right             : 0,
		    bottom            : 0,
		    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
		};
		const content = {
			top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    marginRight           : '-50%',
		    transform             : 'translate(-50%, -50%)',
		    width 				  : '300px',
		    height 				  : '100px'
		};
		const {isShow, showModal, add_official} = this.props;
		return (
			<Modal 
				style={{ overlay: overlay, content: content }}
				isOpen={isShow}
				contentLabel="add offical Modal"
				>
				<div className="offical_modal">
					<p>添加主办方</p>
					<input type="text" ref="official" />
					<button onClick={this.handleAddOfficial.bind(this)}>添加</button>
					<button onClick={showModal}>取消</button>
				</div>
			</Modal>
		)
	}
}

class ActOffical extends Component {
	componentDidMount() {
		const {get_official} = this.props;
		get_official()
	}
	render() {
		const {showModal, isShow, offical, change_offical, add_official} = this.props;
		return (
			<div className="row addOffical">
				<ActOfficalModal 
					isShow={isShow} 
					showModal={showModal} 
					add_official={add_official} 
				/>
				<Label htmlfor="offical" name="主办　方"/>
				<select id="offical" onChange={(e) => {
					console.log(e.target.value);
					change_offical(e.target.value)}
				}>
					<option value="1">主办方1</option>
					<option value="2">主办方2</option>
					<option value="3">主办方3</option>
				</select>
				<button onClick={showModal}>添加主办方</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isShow: state.getIn(['show_add_offical_modal', 'isShow']),
	offical: state.getIn(['act_official', 'official'])
});

const mapDispatchToProps = (dispatch) => ({
	showModal: () => dispatch(show_add_offical_modal()),
	change_offical: (value) => dispatch(act_official(value)),
	add_official: (official) => dispatch(() => {
		fetch(setOfficial, {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: `official=${official}`
		})
		.then(res => res.json())
		.then(res => {
			alert(res.message);
			dispatch(show_add_offical_modal());
		})
		.catch(err => console.error(err));
	}),
	get_official: () => dispatch(() => {
		fetch(getOfficial)
			.then(res => res.json())
			.then(res => console.log(`official => ${res}`))
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActOffical);