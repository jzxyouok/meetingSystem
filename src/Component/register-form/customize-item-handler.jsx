import React, { Component } 	from 'react';
import { Icon, message } 		from 'antd';
import { connect } 				from 'react-redux';

import {
	delete_option,
	move_up_option,
	move_down_option } 			from '../../Redux/Action/register-form.action'; 								

const CustomizeItemHandler = ({index, options_len, handle_delete_option, handle_move_up, handle_move_down}) => (
	<div>
		<Icon data-index={index} type="delete" onClick={(e) => {
			let index = e.target.dataset.index;
			handle_delete_option(+index);
		}} />
		<Icon data-index={index} type="up-square" onClick={(e) => {
			let index = e.target.dataset.index;
			if(+index === 0) {
				message.warn('第一项无法上移');
				return;
			}
			handle_move_up(+index);
		}} />
		<Icon data-index={index} data-len={options_len} type="down-square" onClick={(e) => {
			let index = e.target.dataset.index,
				  len   = e.target.dataset.len;
			if(+index === (len-1)) {
				message.warn('最后一项无法下移');
				return;
			}
			handle_move_down(+index);
		}} />
	</div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	handle_delete_option: (index) => dispatch( delete_option(index) ),
	handle_move_up		: (index) => dispatch( move_up_option(index) ),
	handle_move_down	: (index) => dispatch( move_down_option(index) )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomizeItemHandler);