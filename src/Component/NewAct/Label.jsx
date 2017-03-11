import React, {Component} from 'react';
const Label = ({name, htmlfor}) => <label htmlFor={htmlfor}>{name}<span>{' '}*</span></label>;
export default Label;