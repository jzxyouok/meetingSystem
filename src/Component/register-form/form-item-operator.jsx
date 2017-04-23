// 表单详情处理
import React, {Component} from 'react';
import {Button, Input, Modal, Select, Radio} from 'antd';
import {connect} from 'react-redux';

const ButtonGroup = Button.Group;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class ChoiceEditModal extends Component {
    render() {
        return (
            <Modal className="choice-edit-modal">
                <Row>
                    <Col span={4}>标题</Col>
                    <Col span={20}>
                        <Input placeholder="请输入标题" />
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>选项</Col>
                    <Col span={20}>
                        <Input placeholder="请输入选项" />
                        <Button shape="circle" icon="plus"></Button>
                        <Button shape="circle" icon="minus"></Button>
                    </Col>
                </Row>
            </Modal>
        )
    }
}

class InputEidtModal extends Component {
    render() {
        return (
            <Modal className="input-edit-modal">
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
    render() {
        return (
            <Modal>
                <Row>
                    <Col span={4}>当前题目</Col>
                    <Col span={20}>测试标题测试标题测试标题</Col>
                </Row>
                <Row>
                    <Col span={4}>关联题目</Col>
                    <Col span={20}>
                        <Select placeholder="请选择需要关联的题目">
                            <Option value="1">题目一</Option>
                            <Option value="2">题目二</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <p>当关联的题目选择下面的选项</p>
                    <RadioGroup>
                        <Radio value="1">选项一</Radio>
                        <Radio value="2">选项二</Radio>
                    </RadioGroup>
                    <p>中的任意一个时当前题目才显示</p>
                </Row>
            </Modal>
        )
    }
}

export default class FormItemHandler extends Component {
    render() {
        return (
            <div className="item-hanlder">
                <ButtonGroup type="dashed" size="small">
                    <Button icon="edit">编辑</Button>
                    <Button icon="arrow-up">上移</Button>
                    <Button icon="arrow-down">下移</Button>
                    <Button icon="setting">关联</Button>
                    <Button icon="delete">删除</Button>
                </ButtonGroup>
            </div>
        )
    }
}       