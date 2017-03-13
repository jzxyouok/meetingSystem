import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import Label from './Label';
import {show_add_category_modal, act_category} from '../../Redux/Action/NewAct/NewAct.action';

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
				contentLabel="add category Modal"
				>
				<div className="offical_modal">
					<p>添加活动分类</p>
					<input type="text" />
					<button>添加</button>
					<button onClick={showModal}>取消</button>
				</div>
			</Modal>
		)
	}
}

class ActCategory extends Component {
	render() {
		const {showModal, isShow, category, change_category} = this.props;
		return (
			<div className="row addCatefory">
				<ActOfficalModal isShow={isShow} showModal={showModal} />
				<Label htmlfor="catogery" name="活动分类"/>
				<select id="catogory" onChange={e => change_category(e.target.value)}>
					<option value="1">活动分类1</option>
					<option value="2">活动分类2</option>
					<option value="3">活动分类3</option>
				</select>
				<button onClick={showModal}>添加活动分类</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isShow: state.getIn(['show_add_category_modal', 'isShow']),
	category: state.getIn(['act_category', 'category'])
});

const mapDispatchToProps = (dispatch) => ({
	showModal: () => dispatch(show_add_category_modal()),
	change_category: (value) => dispatch(act_category(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActCategory);

