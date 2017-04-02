/**
 * 参会人员模块
 * 头部人员信息、导入导出功能
 */
import React, { Component }							from 'react';
import { Row, Col, Button, Dropdown, Icon, Menu } 	from 'antd';
import { connect }									from 'react-redux';
import * as AC 										from '../../Redux/Action/attendee.action';

const MenuItem = Menu.Item;

const input_menu = (
	<Menu>
		<MenuItem key="1">批量导入</MenuItem>
		<MenuItem key="2">单个添加</MenuItem>
	</Menu>
);

const output_menu = (
	<Menu>
		<MenuItem key="1">所有参会人员</MenuItem>
		<MenuItem key="2">未审核人员</MenuItem>
	</Menu>
);

class Handler extends Component {
	render() {
		const { at_type, condition, cType, cWords, cCondition } = this.props;
		const { words, category } = condition;
		return <Row>
			<Col span={12} className="participants">
				<Button 
					type={at_type === 'all' ? 'primary' : ''}
					onClick={cType.bind(null, 'all')}>
					参会人员(0)
				</Button>
				<Button 
					type={at_type === 'no_check' ? 'primary' : ''}
					onClick={cType.bind(null, 'no_check')}>
					未审核(0)
				</Button>
			</Col>
			<Col span={12} className="output">
				<Dropdown overlay={input_menu}>
					<Button type="primary">导入 <Icon type="file-add" /></Button>
				</Dropdown>
				<Dropdown overlay={output_menu}>
					<Button type="primary">导出 <Icon type="cloud-download" /></Button>
				</Dropdown>
			</Col>					
		</Row>
	}
}

const mapStateToProps = (state) => ({
	condition: state.getIn(['attendee', 'condition']).toJS(),
	at_type:   state.getIn(['attendee', 'at_type'])
});

const mapDispatchToProps = (dispatch) => ({
	cType: (type) 	=> dispatch(AC.at_type(type)),
	cWords: (word) 	=> dispatch(AC.search_words(word)),
	cCondition: (c) => dispatch(AC.search_category(c))
});

export default connect(mapStateToProps, mapDispatchToProps)(Handler);