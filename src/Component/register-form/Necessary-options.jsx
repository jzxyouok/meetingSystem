import React from 'react';
const NeOptions = ({name}) => (
	<div className="frow">
		<span className="flabel">{name}<span className="strong"> *</span></span>
		<input type="text" disabled className="finput"/>
	</div>
);

export default NeOptions;