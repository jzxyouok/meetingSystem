// 表明表单--通道添加/选择页面
import React, {Component}           from 'react';
import {connect}                    from 'react-redux';
import {Link}                       from 'react-router';
import {mapStateToProps, mapDispatchToProps} 
                                    from './form-select.conn';
import {Button, Select, Modal, Input, Table, Row, Col}    
                                    from 'antd';

const Option = Select.Option;
const selectStyle = {width: 300}

class FormSelect extends Component {
    state = {
        newChannel: false,
        modChannel: false,
        channelInfo: false,
    }

    // 报名通道表格的表头
    columns = [{
        title: '通道ID',
        dataIndex: 'tid',
        key: 'tid',
        width: 60
    }, {
        title: '通道名',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        width: 80,
        render: (text, record) => <a href='javascript:;' onClick={this.modChannel.bind(this, record.tid)}>修改</a>
    }]

    componentDidMount = () => {
        // 请求通道数据
        const {action_id} = this.props;
        this.props.getChannels(action_id);
    }

    // 切换添加报名通道模态框的显示状态
    toggleNewChannel = () => {
        this.setState({
            newChannel: !this.state.newChannel
        });
    }

    // 更改目前的通道名称(还未提交过服务器的)
    cChannel = (e) => {
        const channelname = e.target.value;
        this.props.cChannel(channelname);
    }

    // 添加报名通道
    addChannel = (e) => {
        const { channelname } = this.props.formChannel;
        this.props.addChannel(channelname); 
    }

    // 修改报名通道(已经提交过服务器的)
    modChannel = (tid) => {
        
    }

    // 切换修改报名通道信息模态框的显示状态
    toggleModChannel = () => {
        this.setState({
            modChannel: !this.state.modChannel,
        })
    }

    // 切换报名通道信息模态框的显示状态
    toggleChannelInfo = () => {
        this.setState({
            channelInfo: !this.state.channelInfo
        })
    }

    render() {
        const { existChannel } = this.props.formChannel;
        return (
            <div className="form-select">
                <Modal visible={this.state.newChannel} title="新建报名通道" onOk={this.addChannel} onCancel={this.toggleNewChannel}>
                    <Input placeholder="请输入报名通道的名字" onChange={this.cChannel} />
                </Modal>

                <Modal visible={this.state.channelInfo} title="报名通道信息" onCancel={this.toggleChannelInfo}>
                    <Table columns={this.columns}></Table>
                </Modal>

                <Modal visible={this.state.modChannel} title="修改报名通道" onCancel={this.toggleModChannel}>
                    <Row>
                        <Col span={4}>通道ID</Col>
                        <Col span={20}><Input disabled /></Col>
                    </Row>
                    <Row>
                        <Col span={4}>通道名称</Col>
                        <Col span={20}><Input /></Col>
                    </Row>
                </Modal>

                <Button onClick={this.toggleNewChannel} type="primary" icon="plus-circle-o">新建报名通道</Button>
                <Select placeholder="选择报名通道" style={selectStyle}>
                    {existChannel.map(channel => <Option key={channel.tid}>{channel.name}</Option>)}
                </Select>
                <Button onClick={this.toggleChannelInfo} className="edit" shape="circle" icon="edit"></Button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSelect);