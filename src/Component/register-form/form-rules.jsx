import React, {Component} from 'react';
import {Row, Col, Button, Modal, Table, Form, Input, Select} from 'antd';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './form-rules.conn';

const FormItem = Form.Item;
const Option   = Select.Option;

class Rules extends Component {
    state = {
        newRuleModal: false,
    }

    // 显示、隐藏新建规则的模态框
    toggleNewRuleModal = (e) => {
        this.setState({
            newRuleModal: !this.state.newRuleModal
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
        },, {
            title: '规则',
            dataIndex: 'rule',
            key: 'rule'
        }, {
            title: '操作',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <div>
                    <a href="javascript:;">修改</a>
                    <a href="javascript:;">删除</a>
                </div>
            )
        }];
        const {getFieldDecorator} = this.props.form;
        return (
            <Row>
                <Modal visible={this.state.newRuleModal} title="新建表单规则" onCancel={this.toggleNewRuleModal}>
                    <Form onSubmit={() => {}}>
                        <FormItem label="规则名">
                            {getFieldDecorator('rulename', {
                                rules: [{required: true, message: '规则名称不能为空'}]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="条件">
                            {getFieldDecorator('condition_title', {
                                rules: [{required: true, message: '条件不能为空'}]
                            })(
                                <Select placeholder="选择条件名">
                                    <Option value="1">条件一</Option>
                                    <Option value="2">条件二</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="条件值">
                            {getFieldDecorator('condition_value', {
                                rules: [{required: true, message: '条件对应的值不能为空'}]
                            })(
                                <Select placeholder="请选择条件对应的值">
                                    <Option value="1">条件一</Option>
                                    <Option value="2">条件二</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项">
                            {getFieldDecorator('constraint', {
                                rules: [{required: true, message: '约束项不能为空'}]
                            })(
                                <Select multiple placeholder="需要约束的项目不能为空" >
                                    <Option value="1">条件一</Option>
                                    <Option value="2">条件二</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项的表现">
                            {getFieldDecorator('behaviour', {
                                rules: [{required: true, message: '约束项的表现不能为空'}]
                            })(
                                <Select placeholder="请选择约束项的表现">
                                    <Option value="1">必填</Option>
                                    <Option value="2">选填</Option>
                                    <Option value="3">显示</Option>
                                    <Option value="4">隐藏</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
                <Col>
                    <Button type="primary" onClick={this.toggleNewRuleModal}>新建规则</Button>
                </Col>
                <Table columns={colums} bordered></Table>
                <Col>
                    <Button type="primary">保存</Button>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Rules));