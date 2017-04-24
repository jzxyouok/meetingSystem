// 表单详情处理
import React, {Component} from 'react';
import {Button, Input, Modal, Select, Radio, Popconfirm, Row, Col} from 'antd';
import {connect} from 'react-redux';

const ButtonGroup = Button.Group;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class ChoiceEditModal extends Component {
    render() {
        const {show, cancel} = this.props;
        return (
            <Modal className="choice-edit-modal" title="编辑" visible={show} onCancel={cancel}>
                <Row>
                    <Col span={4}>标题</Col>
                    <Col span={18}>
                        <Input placeholder="请输入标题" />
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>选项</Col>
                    <Col span={18}>
                        <Input placeholder="请输入选项" />
                    </Col>
                    <Col span={2}>
                        <Button icon="delete" shape="circle"></Button>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4}>
                        <Button icon="plus" type="primary">添加选项</Button>
                    </Col>
                </Row>
            </Modal>
        )
    }
}

class InputEidtModal extends Component {
    render() {
        const {show, cancel} = this.props;
        return (
            <Modal className="input-edit-modal" title="编辑" visible={show} onCancel={cancel}>
                <Row>
                    <Col span={4}>标题</Col>
                    <Col span={20}>
                        <Input placeholder="请输入标题" />
                    </Col>
                </Row>
            </Modal>
        )
    }
}

class AssociatedModal extends Component {
    selectStyle = {width: '90%'}
    radioStyle  = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    render() {
        const {show, cancel} = this.props;
        return (
            <Modal title="关联选项设置" visible={show} onCancel={cancel}>
                <Row>
                    <Col span={4}>当前题目</Col>
                    <Col span={20} className="as-title">测试标题测试标题测试标题</Col>
                </Row>
                <Row>
                    <Col span={4}>关联题目</Col>
                    <Col span={20}>
                        <Select placeholder="请选择需要关联的题目" style={this.selectStyle}>
                            <Option value="1">题目一</Option>
                            <Option value="2">题目二</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <p>当关联的题目选择下面的选项</p>
                    <RadioGroup>
                        <Radio style={this.radioStyle} value="1">选项一</Radio>
                        <Radio style={this.radioStyle} value="2">选项二</Radio>
                    </RadioGroup>
                    <p>中的任意一个时当前题目才显示</p>
                </Row>
            </Modal>
        )
    }
}

export class FormItemHandler extends Component {
    state = {
        editModalShow: false,
        associatedModalShow: false,
    }
    
    // 切换显示编辑的模态框
    toggleEditModalShow = () => {
        this.setState({
            editModalShow: !this.state.editModalShow,
        });
    }

    // 切换显示关联选项的模态框
    toggleAssociatedModal = () => {
        this.setState({
            associatedModalShow: !this.state.associatedModalShow,
        });
    }

    render() {
        const modalType = this.props.type;
        return (
            <div className="item-hanlder">
                <AssociatedModal 
                    show={this.state.associatedModalShow}
                    cancel={this.toggleAssociatedModal} />
                {
                    modalType === 'choice' 
                    ? <ChoiceEditModal 
                        show={this.state.editModalShow}
                        cancel={this.toggleEditModalShow} /> 
                    : <InputEidtModal 
                        show={this.state.editModalShow}
                        cancel={this.toggleEditModalShow} />
                }
                <Button
                    onClick={this.toggleEditModalShow}
                    size="small" 
                    icon="edit">
                    编辑
                </Button>
                <Button 
                    size="small" 
                    icon="arrow-up">
                    上移
                </Button>
                <Button 
                    size="small" 
                    icon="arrow-down">
                    下移
                </Button>
                <Button 
                    onClick={this.toggleAssociatedModal} 
                    size="small" 
                    icon="setting">
                    关联
                </Button>
                <Popconfirm title="确定删除吗？">
                    <Button size="small" icon="delete">删除</Button>
                </Popconfirm>
            </div>
        )
    }
}       