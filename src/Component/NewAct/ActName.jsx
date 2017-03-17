import React, {Component} from 'react';
import {connect} from 'react-redux';

import Label from './Label';
import {act_name} from '../../Redux/Action/NewAct/NewAct.action';

class ActName extends Component {
	handleInp(e) {
		const value = e.target.value;
		const {change_name} = this.props;
		change_name(value);
	}
	render() {
		const {act_name} = this.props;
		return (
			<div className="row">
				<Label htmlfor="name" name="会议名称"/>
				<input type="text" id="name" value={act_name} onChange={this.handleInp.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	act_name: state.getIn(['createAct', 'act_name', 'name'])
})

const mapDispatchToProps = (dispatch) => ({
	change_name: (value) => dispatch(act_name(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActName);

