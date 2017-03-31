import React 					from 'react';
import { connect } 				from 'react-redux';
import { Input, Row, Col }		from 'antd';

import Item 					from './form-item';
import { subject_type } 		from '../../Resource/util/utils';
import { 
	update_title, 
	update_options } 			from '../../Redux/Action/register-form.action';
import CustomizeItemHandler 	from './customize-item-handler';

const CustomizeOptions = (props) => {
	console.log(props.customize_options);
	const options_len = props.customize_options.length;
	const options = props.customize_options.map((item, index) => {
		switch(item.option_type) {
			case 'radio':
			case 'select':
			case 'checkbox':
				return (
					<Item key={index} desc={ subject_type(item.option_type) }>
						<Col span={20}>
							<Input 
								value={item.title} 
								data-index={item.index}
								placeholder="请输入本题题目"
								onChange={(e) => {
									const index   = e.target.dataset.index,
										  title   = e.target.value;
									props.handle_title_change(index, title);
								}} 
							/>
							<Row>
								<Col span={2} className="label">
									<p>选项值</p>
								</Col>
								<Col span={22}>
									<Input type="textarea" 
										data-index={item.index} 
										className="muti-options"
										value={item.options.join('@')}
										placeholder="请输入本题选项，选项之间请用'@'符号间隔"
										onChange={(e) => {
											const index   = e.target.dataset.index,
												  options = e.target.value.split('@');
											if(options.length === 0) return;
											props.handle_options_change(index, options);
										}} 
									/>
								</Col>
							</Row>
						</Col>
						<Col span={4} className="customize-item-handler">
							<CustomizeItemHandler index={item.index} options_len={options_len} />
						</Col>
					</Item>
				);
			default:
				return (
					<Item key={index} desc={ subject_type(item.option_type) }>
						<Col span={20}>
							<Input 
								value={item.title} 
								data-index={item.index}
								placeholder="请输入本题题目"
								onChange={(e) => {
									const index   = e.target.dataset.index,
										  title   = e.target.value;
									props.handle_title_change(index, title);
								}} 
							/>	
						</Col>
						<Col span={4} className="customize-item-handler">
							<CustomizeItemHandler index={item.index} options_len={options_len} />
						</Col>
					</Item>
				);
		}
	});
	return (
		<div>{options}</div>
	)
};

const mapStateToProps = (state) => ({
	customize_options: state.getIn(['register_form', 'customize']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
	handle_title_change: (index, title) => dispatch(update_title(index, title)),
	handle_options_change: (index, options) => dispatch(update_options(index, options))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomizeOptions);