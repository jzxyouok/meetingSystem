import * as AC          from '../../Redux/Action/register-form.action';
import {addRigisterChannel, getRegisterChannel, delRegisterChannel, modRegisterChannel} 
                        from '../../Config/apiUrl';
import fetch            from 'isomorphic-fetch';
import {message}        from 'antd';

export const mapStateToProps = (state) => ({
    formChannel: state.getIn(['register_form', 'register_channel']).toJS(),
});

export const mapDispatchToProps = (dispatch) => ({
    getChannels: (id) => dispatch(() => {
        fetch(getRegisterChannel+`?action_id=${id}`)
        .then(res => res.json())
        .then(res => {
            if(res.code === 1) {
                dispatch( AC.add_register_channel(res.message) );
            }
        })
        .catch(err => message.error('网络错误请稍后重试或联系系统管理员'));
    }),

    addChannel: (id, name) => dispatch(() => {
        fetch(addRigisterChannel, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action_id=${id}&name=${name}`
        })
        .then(res => res.json())
        .then(res => {
            if(res.code === 1) {
                dispatch( AC.add_register_channel(res.message) );
            }
        })
        .catch(err => message.error('网络错误请稍后重试或联系系统管理员'));
    }),

    delChannel: (id, tid) => dispatch(() => {
        fetch(delRegisterChannel, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action_id=${id}&tid=${tid}`
        })
        .then(res => res.json())
        .then(res => {
            message.success('删除成功');
            dispatch( AC.add_register_channel(res.message) );
        })
        .catch(err => message.error('网络错误请稍后重试或联系系统管理员'));
    }),

    modChannel: (tid, name) => dispatch(() => {
        fetch(modRegisterChannel+`?tid=${tid}&name=${name}`)
        .then(res => res.json())
        .then(res => {
            if(res.code === 1) {
                const duration = 2;
                message.success(res.message, duration,() => location.reload());
            }
        })
        .catch(err => message.error('网络错误请稍后重试或联系系统管理员'));
    }),

    cChannel: (name) => dispatch( AC.update_register_channel(name) ),

    // 更改正在编辑的通道信息
    cEditChannelInfo: (tid, name) => dispatch( AC.update_edit_channel(tid, name) ),
});