import React, {Component} from 'react';
import {Row, Col, Button, Modal, Table, Form, Input, Select, Popconfirm} from 'antd';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './form-rules.conn';

const FormItem = Form.Item;
const Option   = Select.Option;

class Rule extends Component {
    state = {
        newRuleModal : false,
        modifyRuleModal : false,
        newRuleConditionValue: [],
        modifyRuleConditionValue: [],
    }

    selectStyle = {
        width: '100%',
    }

    // 新建一条规则
    newRule = () => {
        this.setState({
            newRuleModal : true,
        }, () => {
            // 先在store中新建一条规则
            this.props.addRule();
            // 现在已经有的规则数量
            const len = this.props.rules.length;
            console.log(len);
            // 更改现在正在编辑的规则的索引
            this.props.cEditIndex(len);
        });
    }
    // 关闭新建规则模态框
    closeNewRule = () => {
        this.setState({
            newRuleModal : false,
        });
        // 关闭规则模态框时，没有点击确认则删除最后一条规则
        this.props.delLast();
    }
    // 新建规则项目中条件项改变
    newRuleConditionChange = (value) => {
        const condition = this.props.formdata.filter(item => item.title === value)[0];
        this.setState({
            newRuleConditionValue: condition.options,
        })
    }
    // 新建规则确定按钮事件
    newRuleConfirm = () => {
        const fields = ['title', 'cname', 'cvalue', 'constraint', 'behaviour'];
        this.props.form.validateFields(fields, (err, values) => {
            if(err) return;
            // 如果没有错误，则关闭模态框
            this.setState({
                newRuleModal: false,
            })
        })
    }
    // 修改规则时项目的条件发生改变
    modifyRuleConditionChange = (value) => {
        const condition = this.props.formdata.filter(item => item.title === value)[0];
        this.setState({
            modifyRuleConditionValue: condition.options,
        })
    }
    // 修改一条规则
    modifyRule = (rid) => {
        this.setState({
            modifyRuleModal : true,
        }, () => {
            // 初始化表单的初始值
            const rule = this.props.rules[rid];
            this.props.form.setFieldsValue({
                'modify_title': rule.title,
                'modify_cname': rule.condition_title,
                'modify_cvalue': rule.condition_value,
                'modify_constraint': rule.constraint,
                'modify_behaviour': rule.behaviour,
            });
            // 修改此时正在编辑的规则索引
            this.props.cEditIndex(rid);
        })
    }
    // 修改规则确定按钮事件
    modifyRuleConfirm = () => {
        const fields = ['modify_title', 'modify_cname', 'modify_cvalue', 'modify_constraint', 'modify_behaviour'];
        this.props.form.validateFields(fields, (err, values) => {
            if(err) return;
            this.setState({
                modifyRuleModal: false,
            });
        });
    }
    // 关闭修改规则模态框
    closeModifyRule = () => {
        this.setState({
            modifyRuleModal : false,
        });
    }
    // 删除一条规则
    deleteRule = (rid) => {
        this.props.delRule(rid)
    }
    render() {
        // 规则表格的列
        const columns = [{
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
            render: (text, record) => {
                return (
                    <div>
                        <a href="javascript:;" onClick={this.modifyRule.bind(this, record.key)}>修改</a>
                        <Popconfirm title="确认删除这条规则吗" onConfirm={this.deleteRule.bind(this, record.key)}>
                            <a href="javascript:;">删除</a>
                        </Popconfirm>
                    </div>
                )}
        }];

        const dataSource = this.props.rules.map((item, index) => ({
            key: index,
            rid: index+1,
            rulename: item.title,
            rule: `当用户选择了【${item.condition_title}】项的【${item.condition_value}】时,【${item.constraint}】变为【${item.behaviour}】`
        }))

        const {getFieldDecorator} = this.props.form;

        // 可以用来做条件选项的表单项
        const conditions = this.props.formdata.filter(item => {
            return item.option_type === 'radio' || item.option_type === 'select' || item.option_type === 'checkbox';
        });

        return (
            <Row>
                <Modal title="新建规则" visible={this.state.newRuleModal} onCancel={this.closeNewRule} onOk={this.newRuleConfirm}>
                        <FormItem label="规则名">
                            {getFieldDecorator('title', {
                                rules: [{required: true, message: '规则名称不能为空'}]
                            })(
                                <Input placeholder="请输入规则名称" />
                            )}
                        </FormItem>
                        <FormItem label="条件名">
                            {getFieldDecorator('cname', {
                                rules: [{required: true, message: '条件名称不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请输入条件名称" onChange={this.newRuleConditionChange}>
                                    {conditions.map(item => <Option value={item.title} key={item.index}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="条件名对应的选项">
                            {getFieldDecorator('cvalue', {
                                rules: [{required: true, message: '条件对应的值不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请选择条件对应的值">
                                    {this.state.newRuleConditionValue.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项(多选)">
                            {getFieldDecorator('constraint', {
                                rules: [{required: true, message: '约束项不能为空'}]
                            })(
                                <Select style={this.selectStyle} multiple placeholder="请选择约束项">
                                    {this.props.formdata.map(item => <Option value={item.title} key={item.index}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项的表现">
                            {getFieldDecorator('behaviour', {
                                rules: [{required: true, message: '约束项的表现不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请选择约束项的表现">
                                    <Option value="必填">必填</Option>
                                    <Option value="选填">选填</Option>
                                    <Option value="显示">显示</Option>
                                    <Option value="隐藏">隐藏</Option>
                                </Select>
                            )}
                        </FormItem>
                </Modal>


                <Modal title="修改规则" visible={this.state.modifyRuleModal} onCancel={this.closeModifyRule} onOk={this.modifyRuleConfirm}>
                        <FormItem label="规则名">
                            {getFieldDecorator('modify_title', {
                                rules: [{required: true, message: '规则名称不能为空'}]
                            })(
                                <Input placeholder="请输入规则名称" />
                            )}
                        </FormItem>
                        <FormItem label="条件名">
                            {getFieldDecorator('modify_cname', {
                                rules: [{required: true, message: '条件名称不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请输入条件名称" onChange={this.modifyRuleConditionChange}>
                                    {conditions.map(item => <Option value={item.title} key={item.index}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="条件名对应的选项">
                            {getFieldDecorator('modify_cvalue', {
                                rules: [{required: true, message: '条件对应的值不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请选择条件对应的值">
                                    {this.state.modifyRuleConditionValue.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项(多选)">
                            {getFieldDecorator('modify_constraint', {
                                rules: [{required: true, message: '约束项不能为空'}]
                            })(
                                <Select style={this.selectStyle} multiple placeholder="请选择约束项">
                                    {this.props.formdata.map(item => <Option value={item.title} key={item.index}>{item.title}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="约束项的表现">
                            {getFieldDecorator('modify_behaviour', {
                                rules: [{required: true, message: '约束项的表现不能为空'}]
                            })(
                                <Select style={this.selectStyle} placeholder="请选择约束项的表现">
                                    <Option value="必填">必填</Option>
                                    <Option value="选填">选填</Option>
                                    <Option value="显示">显示</Option>
                                    <Option value="隐藏">隐藏</Option>
                                </Select>
                            )}
                        </FormItem>
                </Modal>
                <Button type="primary" onClick={this.newRule}>新建规则</Button>
                <Table columns={columns} dataSource={dataSource} />
                <Button type="primary">保存规则</Button>
            </Row>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create({
    onFieldsChange: (props, fields) => {
        const dirtyField = Object.keys(fields)[0];
        if(fields[dirtyField]) {
            const editIndex = props.editIdx;
            const dirtyValue = fields[dirtyField].value;
            switch(dirtyField) {
                case 'title':
                    return props.cTitle(editIndex, dirtyValue);
                case 'cname':
                    return props.cConditionTitle(editIndex, dirtyValue);
                case 'cvalue':
                    return props.cConditionValue(editIndex, dirtyValue);
                case 'constraint':
                    return props.cConstraint(editIndex, dirtyValue);
                case 'behaviour':
                    return props.cBehaviour(editIndex, dirtyValue);
                case 'modify_title':
                    return props.cTitle(editIndex, dirtyValue);
                case 'modify_cname':
                    return props.cConditionTitle(editIndex, dirtyValue);
                case 'modify_cvalue':
                    return props.cConditionValue(editIndex, dirtyValue);
                case 'modify_constraint':
                    return props.cConstraint(editIndex, dirtyValue);
                case 'modify_behaviour':
                    return props.cBehaviour(editIndex, dirtyValue);
                default:
                    break;
            }
        }
    }
})(Rule));