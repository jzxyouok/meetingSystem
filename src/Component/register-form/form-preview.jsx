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
        })
        return (
            <Form className="form-preview">
                {items}
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    prevData: state.getIn(['register_form', 'customize']).toJS(),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(RegisterPreview));