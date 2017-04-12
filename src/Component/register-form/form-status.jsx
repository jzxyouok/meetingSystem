/**
 * 报名表单--表单的发布状态组件
 */
import { Col, Tag } 	from 'antd';
import React 			from 'react';
import { connect } 		from 'react-redux';

const FormState = ({status}) => (
	<Col offset={4}>
		{
			status === 0 ? <Tag color="#f50">本报名表未发布</Tag> : <Tag color="#87d068">本报名表已发布</Tag>
		}
	</Col>
);

const mapStateToProps = (state) => ({
	status: state.getIn(['register_form', 'status'])
});

export default connect(mapStateToProps)(FormState);