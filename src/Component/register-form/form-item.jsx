import React, { Component } from 'react';
import { Row, Col } from 'antd';

const row_label_layout = {
	xs: { span: 24 },
	sm: { span: 4 }
};

const row_item_layout = {
	xs: { span: 24 },
	sm: { span: 16 }
};

const Item = ({desc, children}) => (
	<Row>
		<Col {...row_label_layout} className="label">{desc}</Col>
		<Col {...row_item_layout} className="item">{children}</Col>
	</Row>
)

export default Item;