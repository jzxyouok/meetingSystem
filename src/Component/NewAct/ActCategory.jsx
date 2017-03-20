import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import Label from './Label';
import { show_add_category_modal, act_category, add_act_category } from '../../Redux/Action/NewAct/NewAct.action';
import { getCategory, setCategory } from '../../Config/apiUrl';

class ActOfficalModal extends Component {
	handleClick(e) {
		e.preventDefault()
		const {add_category} = this.props;
		const category = this.refs.category.value;
		add_category(category);
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
		const {isShow, showModal} = this.props;
		return (
			<Modal 
				style={{ overlay: overlay, content: content }}
				isOpen={isShow}
				contentLabel="add category Modal"
				>
				<div className="offical_modal">
					<p>添加会议分类</p>
					<input type="text" ref="category" />
					<button onClick={this.handleClick.bind(this)}>添加</button>
					<button onClick={showModal}>取消</button>
				</div>
			</Modal>
		)
	}
}

class ActCategory extends Component {
	componentDidMount() {
		const {get_category} = this.props;
		get_category();
	}
	render() {
		const {showModal, isShow, category, change_category, now_categorys, add_category} = this.props;
		return (
			<div className="row addCatefory">
				<ActOfficalModal 
					isShow={isShow} 
					showModal={showModal} 
					add_category={add_category} />
				<Label htmlfor="catogery" name="会议分类"/>
				<select id="catogory" onChange={e => change_category(e.target.value)}>
					{
						now_categorys.map((item,index) => {
							return <option value={item} key={index}>{item}</option>
						})
					}
				</select>
				<button onClick={showModal}>添加会议分类</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isShow: state.getIn(['show_add_category_modal', 'isShow']),
	category: state.getIn(['act_category', 'category']),
	now_categorys: state.getIn(['add_act_category', 'now_categorys']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
	showModal: () => dispatch(show_add_category_modal()),
	change_category: (value) => dispatch(act_category(value)),
	get_category: () => dispatch(() => {
		fetch(getCategory)
			.then(res => res.json())
			.then(res => dispatch(add_act_category(res)))
			.catch(err => {throw err});
	}),
	add_category: (value) => dispatch(() => {
		fetch(setCategory, {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: `category=${value}`
		})
		.then(res => res.json())
		.then(res => {
			alert(res.message);
			dispatch(show_add_category_modal())
		})
		.catch(err => {throw err});
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActCategory);

