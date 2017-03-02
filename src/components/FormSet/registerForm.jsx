import React, {Component} from 'react';
import {render} from 'react-dom';
import {
	Modal,
    Button, 
    Form,
    InputGroup,
    FormGroup,
    ControlLabel,
    FormControl,
    Col,
    Glyphicon,
    Checkbox
} from 'react-bootstrap';
import '../../scss/admin/registerForm.scss';

const CommonChoiceButton = ({buttonDes}) => <Button>{buttonDes}</Button>;
const CustomizeOptionLi = ({liDes}) => <li><Glyphicon glyph="edit"/>{liDes}<Glyphicon glyph="plus-sign"/></li>;


class CommonChoice extends Component {
	render() {
		const buttonDes = ['姓名', '手机号', '性别', '照片', '与会类型', '上衣尺寸', '交通方式', '航班/列车号', '到站地点', '到站时间', '餐饮住宿', '饮食偏好', '返程方式', '送机/站时间', '备注'];
		let arr = buttonDes.map((item, index) => <CommonChoiceButton buttonDes={item} key={`btn-${index}`} />);
		return <div>
					<p className='toolboxTitle'>常用选项</p>
					<div className='commons'>
						<Button disabled>姓名</Button>
						<Button disabled>手机号</Button>
						<Button>性别</Button>
						<Button>照片</Button>
						<Button>与会类型</Button>
						<Button>上衣尺寸</Button>
						<Button>交通方式</Button>
						<Button>航班/列车号</Button>
						<Button>到站地点</Button>
						<Button>到站时间</Button>
						<Button>餐饮住宿</Button>
						<Button>饮食偏好</Button>
						<Button>返程方式</Button>
						<Button>送机/站时间</Button>
						<Button>备注</Button>
					</div>
				</div>
	}
}

class CustomizeOption extends Component {
	render() {
		return  <div>
					<p className='toolboxTitle'>自定义项</p>
					<ul className='customizeOptions'>
						<li><a href="#"><Glyphicon glyph="edit"/>普通文本框<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>多行文本框<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>日期<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>单选<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>多选<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>下拉选择框<Glyphicon glyph="plus-sign"/></a></li>
						<li><a href="#"><Glyphicon glyph="edit"/>地区<Glyphicon glyph="plus-sign"/></a></li>
					</ul>
				</div>
	}
}

class ToolBox extends Component {
	render() {
		return <div className='toolbox'>
					<CommonChoice />
					<CustomizeOption />
				</div>
	}
}

export default class Forms extends Component {
	render() {
		return  <div>
					<Form horizontal className='form'>
						<span className='title'>报名表单设置</span>
						<FormGroup controlId="name">
							<Col xs={2} className='label'>
								<ControlLabel>姓名</ControlLabel>
							</Col>
							<Col xs={8}>
								<FormControl type="text" disabled></FormControl>
							</Col>	
						</FormGroup>

						<FormGroup controlId="tel">
							<Col xs={2} className='label'>
								<ControlLabel>手机号</ControlLabel>
							</Col>
							<Col xs={8}>
								<FormControl type="text" disabled></FormControl>
							</Col>	
						</FormGroup>

						<p className='others'>其他添加报名表单收集项</p>
						
						<FormGroup>
							<Col xs={2} className='label'>
								<Checkbox inline>必填</Checkbox>
							</Col>
							<Col xs={8}>
								<FormControl type="text" placeholder="请在此输入标题"></FormControl>
							</Col>
							<Col xs={2} className='handle'>
								<Glyphicon glyph="cog"/>
								<Glyphicon glyph="trash"/>
							</Col>
						</FormGroup>
					</Form>
					<ToolBox />
				</div>

	}
}