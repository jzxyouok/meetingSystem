/**
 * 参会人员
 * 搜索条件
 */
import React, { Component }							from 'react';
import { Row, Col, Input, Select, Button, Icon } 	from 'antd';
import { connect }									from 'react-redux';
import * as AC 										from '../../Redux/Action/attendee.action';

const Option = Select.Option;

class Condition extends Component {
	render() {
		const { cWords, cCategory } = this.props;
		return (
			<div>
				<Row>
					<Col span={12}>
						<Input 
							placeholder="请输入搜索关键字：姓名，手机号等" 
							onChange={e => cWords(e.target.value)}/>
					</Col>
				</Row>
				<Row className="condition">
					<Col span={2}>搜索条件</Col>
					<Col span={6}>
						<Select 
							defaultValue="0" 
							style={{width: '100%'}}
							onChange={cCategory}>
							<Option value="0">请选择搜索条件</Option>
							<Option value="username">姓名</Option>
							<Option value="phone">手机号</Option>
						</Select>
					</Col>
				</Row>
				<Row>
					<Button type="primary">搜索<Icon type="search" /></Button>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	cWords: (words) => dispatch(AC.search_words(words)),
	cCategory: (c)  => dispatch(AC.search_category(c))
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Condition);
