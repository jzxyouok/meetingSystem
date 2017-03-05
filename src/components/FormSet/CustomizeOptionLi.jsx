import React from 'react';
import {Glyphicon} from 'react-bootstrap';
const CustomizeOptionLi = ({liDes}) => <li><Glyphicon glyph="edit"/>{liDes}<Glyphicon glyph="plus-sign"/></li>;
export default CustomizeOptionLi;