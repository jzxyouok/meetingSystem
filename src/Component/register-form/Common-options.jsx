import React from 'react';

const CommonOption = ({name, hanleClick}) => {
	return <a href="javascript:;" onClick={handleClick}>{name}</a>
};

const options = [
	{id:1, name: '性别', operation: 'sex'}, 
	{id:2, name: '照片', operation: 'photo'}, 
	{id:3, name: '与会类型', operation: 'type'}, 
	{id:4, name: '上衣尺寸', operation: 'size'}
];

