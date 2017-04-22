// 表单详情组件
import React, { Component } from 'react';
import {RegSelect, RegRadio, RegCheckbox, RegInput, RegTimer, RegFile} from './form-item';

export default class FormDetail extends Component {
    render() {
        return (
        	<div className="form-detail">
        		<RegSelect />
        		<RegRadio />
        		<RegCheckbox />
        		<RegInput />
        		<RegTimer />
        		<RegFile />
        	</div>
        )
    }
}