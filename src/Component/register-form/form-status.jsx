import { Col, Tag } 	from 'antd';
import React 			from 'react';
import { connect } 		from 'react-redux';

const FormState = ({status}) => (
	<Col offset={4}>
		{
			status === 0 ? <Tag color="#f50">本会议未发布</Tag> : <Tag color="#87d068">本会议已发布</Tag>
		}
	</Col>
);

const mapStateToProps = (state) => ({
	status: state.getIn(['register_form', 'status'])
});

export default connect(mapStateToProps)(FormState);