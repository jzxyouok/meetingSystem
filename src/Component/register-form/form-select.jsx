// 表明表单--通道添加/选择页面
import React, {Component}           from 'react';
import { Button, Select, Modal, Input }    
                                    from 'antd';

const Option = Select.Option;
const selectStyle = {width: 300}

export default class FormSelect extends Component {
    state = {
        newChannel: false
    }
    // 切换添加报名通道模态框的显示状态
    toggleNewChannel = () => {
        this.setState({
            newChannel: !this.state.newChannel
        });
    }
    render() {
        return (
            <div className="form-select">
                <Modal visible={this.state.newChannel} title="新建报名通道" onCancel={this.toggleNewChannel}>
                    <Input placeholder="请输入报名通道的名字" />
                </Modal>
                <Button onClick={this.toggleNewChannel} type="primary" icon="plus-circle-o">新建报名通道</Button>
                <Select placeholder="选择报名通道" style={selectStyle}></Select>
            </div>
        )
    }
}