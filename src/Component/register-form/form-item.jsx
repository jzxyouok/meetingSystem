/**
 * 表明表单--自定义选项--公共样式组件
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

const row_label_layout = {
	xs: { span: 20 },
	sm: { span: 4 }
};

const row_item_layout = {
	xs: { span: 20 },
	sm: { span: 16 }
};

const row_handler_layout = {
	xs: { span: 4},
	sm: { span: 4}
};

const Item = ({desc, children, handler}) => (
	<Row>
		<Col {...row_label_layout} className="label">{desc}</Col>
		<Col {...row_item_layout} className="item">{children}</Col>
	</Row>
)

export default Item;