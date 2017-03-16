import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import Label from './Label';
import {show_add_offical_modal, act_official} from '../../Redux/Action/NewAct/NewAct.action';

class ActOfficalModal extends Component {
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
		const {isShow, showModal} = this.props;
		return (
			<Modal 
				style={{ overlay: overlay, content: content }}
				isOpen={isShow}
				contentLabel="add offical Modal"
				>
				<div className="offical_modal">
					<p>添加主办方</p>
					<input type="text" />
					<button>添加</button>
					<button onClick={showModal}>取消</button>
				</div>
			</Modal>
		)
	}
}

class ActOffical extends Component {
	render() {
		const {showModal, isShow, offical, change_offical} = this.props;
		return (
			<div className="row addOffical">
				<ActOfficalModal isShow={isShow} showModal={showModal} />
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
	change_offical: (value) => dispatch(act_official(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActOffical);














