// 报名表单预览
import React, {Component}       from 'react';
import {Form, Input, Select, DatePicker, Radio, Checkbox}    
                                from 'antd';
import {connect}                from 'react-redux';
import {getRegisterForm}        from '../../Config/apiUrl';
import fetch                    from 'isomorphic-fetch';
import {preview_formdata}       from '../../Redux/Action/register-form.action';

const FormItem      = Form.Item;
const RadioGroup    = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option        = Select.Option;

class RegisterPreview extends Component {
    addItem = (fieldtitle, fieldname, key, type, options) => {
        const {getFieldDecorator} = this.props.form;
        switch(type) {
            case 'text':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(<Input />)}
                    </FormItem>
                );
            case 'textarea':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(<Input type="textarea" />)}
                    </FormItem>
                );
            case 'date':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(
                            <DatePicker showTime style={{width: '100%'}} format='YYYY-MM-DD HH:mm:ss' />
                        )}
                    </FormItem>
                );
            case 'radio':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(
                            <RadioGroup>
                                {options.map((item, index) => <Radio value={item} key={index}>{item}</Radio>)}
                            </RadioGroup>
                        )}
                    </FormItem>
                );
            case 'select':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(
                            <Select placeholder={fieldtitle}>
                                {options.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
                            </Select>
                        )}
                    </FormItem>
                );
            case 'checkbox':
                let checkboxOpts = [];
                options.forEach(item => {
                    checkboxOpts.push({
                        label: item,
                        value: item,
                    });
                });
                return (
                    <FormItem label={fieldtitle} key={key}>
                        <CheckboxGroup options={checkboxOpts}></CheckboxGroup>
                    </FormItem>
                );
            case 'file':
                return (
                    <FormItem label={fieldtitle} key={key}>
                        {getFieldDecorator(fieldname)(
                            <Input type="file" />
                        )}
                    </FormItem>
                )
            default:
                break;
        }
       
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const items = this.props.prevData.map(item => {
            const {title, name, index, option_type, options} = item;
            return this.addItem(title, name, index, option_type, options);
        });
        console.log(this.props.prevData);
        return (
            <Form className="form-preview">
                {items}
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    prevData: state.getIn(['register_form', 'customize']).toJS(),
    rules: state.getIn(['register_form', 'rules']).toJS(),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create({
    onFieldsChange: (props, fields) => {
        // 变化的表单项的name和value
        const fieldname = Object.keys(fields)[0];
        const fieldvalue = fields[fieldname].value;
        // 查出班花表单项的title
        const dirty = props.prevData.filter(item => item.name === fieldname);
        const fieldtitle = dirty[0].title;

        // 再去规则中查找这个题目有没有限制
        const rule = props.rules.filter(item => item.condition_title === fieldtitle);
        
        // 如果本规则的长度为0 则return
        if(rule.length) {
            return;
        }
    }
})(RegisterPreview));






























