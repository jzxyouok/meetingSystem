import React, {Component} from 'react';
import {Row, Col, Button, Modal, Table, Form, Input, Select, Popconfirm} from 'antd';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './form-rules.conn';

const FormItem = Form.Item;
const Option   = Select.Option;

class Rules extends Component {
    state = {
        newRuleModal: false,
        condition_value: [],
        modalConfirm: 'init',
    }

    // 显示、隐藏新建规则的模态框
    toggleNewRuleModal = (type) => {
        // 初始化规则表单
        if(type === 'init') {
            this.setState({
                modalConfirm: 'init'
            });
            this.props.form.setFields({
                title: { value: '' },
                condition_title: { value: '' }, 
                condition_value: { value: '' }, 
                constraint: { value: [] }, 
                behaviour: { value: '' },
            })
        }
        this.setState({
            newRuleModal: !this.state.newRuleModal
        })
    }

    // 添加一条规则
    addRule = () => {
        if(this.state.modalConfirm === 'init'){
            this.props.form.validateFields((err, values) => {
                if(err) return;
                const {title, condition_title, condition_value, constraint, behaviour} = values;
                this.props.addRule(title, condition_title, condition_value, constraint, behaviour);
            });
        }
        this.toggleNewRuleModal();
    }

    // 修改某一项规则
    modify = (rid) => {
        // 首先更改store中存储的当前的index
        this.props.cEditIndex(rid);
        const rule = this.props.rules[rid];
        const {title, condition_title, condition_value, constraint, behaviour} = rule;
        this.props.form.setFields({
            title: { value: title },
            condition_title: { value: condition_title }, 
            condition_value: { value: condition_value }, 
            constraint: { value: constraint }, 
            behaviour: { value: behaviour },
        });
        this.setState({
            newRuleModal: !this.state.newRuleModal,
            modalConfirm: 'modify'
        })
    }

    // 删除某一项规则
    delete = (rid) => {
        this.props.delRule(rid);
    }

    // 当条件值发生改变时
    conditionChange = (val) => {
        const condition = this.props.formdata.filter(item => item.title === val)[0];
        this.setState({
            condition_value: condition.options,
        })
    }

    render() {
        const colums = [{
            title: '序号',
            dataIndex: 'rid',
            width: 100,
            key: 'rid'
        }, {
            title: '规则名称',
            dataIndex: 'rulename',
            key: 'rulename'
        }, {
            title: '规则',
            dataIndex: 'rule',
            key: 'rule'
        }, {
            title: '操作',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <div>
                    <a href="javascript:;" onClick={this.modify.bind(this, record.rid - 1)}>修改</a>
                    <Popconfirm title="确认删除这条规则吗" onConfirm={this.delete.bind(this, record.rid - 1)}>
                        <a href="javascript:;">删除</a>
                    </Popconfirm>
                </div>
            )
        }];
        const dataSource = this.props.rules.map((item, index) => ({
            key: index,
            rid: index+1,
            rulename: item.title,
            rule: `当用户选择了【${item.condition_title}】项的【${item.condition_value}】时，【${item.constraint}】变为【${item.behaviour}】`
        }))
        const {getFieldDecorator} = this.props.form;

        const conditions = this.props.formdata.filter(item => {
            const type = item.option_type;
            return type === 'select' || type === 'radio' || type === 'checkbox';
        });

        return (
            <Row>
                <Modal 
                    visible={this.state.newRuleModal} 
                    title="新建表单规则" 
                    onCancel={this.toggleNewRuleModal}
                    onOk={this.addRule}>
                    <Form>
                        <FormItem label="规则名">
                            {getFieldDecorator('title', {
                                rules: [{required: true, message: '规则名称不能为空'}]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="条件">
                            {getFieldDecorator('condition_title', {
                                rules: [{required: true, message: '条件不能为空'}]
                            })(
                                <Select placeholder="选择条件名" onChange={this.conditionChange}>
                                    {conditions.map((item, index) => <Option key={index} value={item.title}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="条件值">
                            {getFieldDecorator('condition_value', {
                                rules: [{required: true, message: '条件对应的值不能为空'}]
                            })(
                                <Select placeholder="请选择条件对应的值">
                                    {this.state.condition_value.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项">
                            {getFieldDecorator('constraint', {
                                rules: [{required: true, message: '约束项不能为空'}]
                            })(
                                <Select multiple placeholder="需要约束的项目不能为空" >
                                    {this.props.formdata.map((item, index) => <Option key={index} value={item.title}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项的表现">
                            {getFieldDecorator('behaviour', {
                                rules: [{required: true, message: '约束项的表现不能为空'}]
                            })(
                                <Select placeholder="请选择约束项的表现">
                                    <Option value="必填">必填</Option>
                                    <Option value="选填">选填</Option>
                                    <Option value="显示">显示</Option>
                                    <Option value="隐藏">隐藏</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
                <Col>
                    <Button type="primary" onClick={this.toggleNewRuleModal.bind(this, 'init')}>新建规则</Button>
                </Col>
                <Table columns={colums} dataSource={dataSource} bordered></Table>
                <Col>
                    <Button type="primary">保存</Button>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
    onFieldsChange: (props, fields) => {
        const editIndex  = props.editIdx;
        const dirtyField = Object.keys(fields)[0];
        if(fields[dirtyField]) {
            const dirtyValue = fields[dirtyField].value;
            console.log(dirtyValue);
            switch(dirtyField) {
                case 'title':
                    return props.cTitle(editIndex, dirtyValue);
                case 'condition_title':
                    return props.cConditionTitle(editIndex, dirtyValue);
                case 'condition_value':
                    return props.cConditionValue(editIndex, dirtyValue);
                case 'constraint':
                    return props.cConstraint(editIndex, dirtyValue);
                case 'behaviour':
                    return props.cBehaviour(editIndex, dirtyValue);
                default:
                    break;
            }
        }
    }
})(Rules));