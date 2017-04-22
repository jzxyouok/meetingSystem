// 表明表单--通道添加/选择页面
import React, {Component}           from 'react';
import {connect}                    from 'react-redux';
import {Link}                       from 'react-router';
import {mapStateToProps, mapDispatchToProps} 
                                    from './form-select.conn';
import {Button, Select, Modal, Input, Table, Row, Col, Popconfirm}    
                                    from 'antd';

const Option = Select.Option;
const selectStyle = {width: 300}

class FormSelect extends Component {
    state = {
        newChannel: false,
        modChannel: false,
        channelInfo: false,
        editIndex: 0,
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
        render: (text, record) => (
            <div>
                <a href="javascript:;" onClick={this.toggleModChannel.bind(this, record.tid)}>修改</a>
                <Popconfirm onConfirm={this.delChannel.bind(this, record.key)} title="确定删除吗?">
                    <a href="javascript:;">删除</a>
                </Popconfirm>
            </div>
        )
    }]

    // 报名通道表单内容
    dataSource = () => {
        const { existChannel } = this.props.formChannel;
        return existChannel.map((channel, index) => ({
            key: channel.tid,
            tid: index+1,
            name: channel.name,
        }));
    }

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
        const { nowChannel } = this.props.formChannel;
        const { action_id } = this.props;
        this.props.addChannel(action_id, nowChannel);
        this.toggleNewChannel();
    }

    // 修改报名通道(已经提交过服务器的)
    modChannel = (tid, e) => {
        this.props.cEditChannelInfo(tid, e.target.value);
    }

    // 切换修改报名通道信息模态框的显示状态
    toggleModChannel = (tid) => {
        if(tid) {
            const name = this.getEidtChannel(tid);
            this.props.cEditChannelInfo(tid, name);
        }
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

    // 提交修改的channel
    submitModChannel = (e) => {
        const {tid, name} = this.props.formChannel.editChannel;
        this.props.modChannel(tid, name);
    }

    // 根据tid获取正在编辑的通道信息
    getEidtChannel = (tid) => {
        const { existChannel } = this.props.formChannel;
        const channel = existChannel.filter(channel => channel.tid == tid);
        if(channel.length > 0) {
            return channel[0].name;
        } else {
            return '';
        }
    }

    // 删除通道
    delChannel = (tid) => {
        const { action_id } = this.props;
        this.props.delChannel(action_id, tid);
        this.toggleChannelInfo();
    }

    render() {
        const { existChannel, editChannel } = this.props.formChannel;
        const dataSource = this.dataSource();

        return (
            <div className="form-select">
                {/* 新建报名通道模态框 */}
                <Modal 
                    visible={this.state.newChannel} 
                    title="新建报名通道" 
                    onOk={this.addChannel} 
                    onCancel={this.toggleNewChannel}>
                    <Input placeholder="请输入报名通道的名字" onChange={this.cChannel} />
                </Modal>

                {/* 报名通道信息模态框 */}
                <Modal 
                    visible={this.state.channelInfo} 
                    title="报名通道信息" 
                    onCancel={this.toggleChannelInfo}>
                    <Table columns={this.columns} dataSource={dataSource} pagination={false} />
                </Modal>

                {/* 修改报名通道模态框 */}
                <Modal 
                    visible={this.state.modChannel} 
                    title="修改报名通道"
                    onOk={this.submitModChannel}
                    onCancel={this.toggleModChannel}>
                    <Row>
                        <Col span={4}>通道ID</Col>
                        <Col span={20}>
                            <Input defaultValue={editChannel.tid} disabled />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>通道名称</Col>
                        <Col span={20}>
                            <Input value={editChannel.name} onChange={this.modChannel.bind(this, editChannel.tid)} />
                        </Col>
                    </Row>
                </Modal>

                {/* 新建报名通道 */}
                <Button 
                    onClick={this.toggleNewChannel} 
                    type="primary" 
                    icon="plus-circle-o">
                    新建报名通道
                </Button>

                {/* 选择报名通道 */}
                <Select 
                    placeholder="选择报名通道" 
                    style={selectStyle}>
                    {existChannel.map(channel => <Option key={channel.tid}>{channel.name}</Option>)}
                </Select>

                {/* 编辑报名通道 */}
                <Button 
                    onClick={this.toggleChannelInfo} 
                    className="edit" 
                    shape="circle" 
                    icon="edit">
                </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSelect);