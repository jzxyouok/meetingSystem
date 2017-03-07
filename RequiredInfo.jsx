import React, {Component} from 'react';

const RequiredInfo = ({name}) => (
	<div className="form-row">
		<span className="form-label">{name}<span className="strong"> *</span></span>
		<input type="text" disabled className="form-input"/>
	</div>
);

export default RequiredInfo;