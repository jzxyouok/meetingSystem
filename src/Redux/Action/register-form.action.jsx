// 更新报名通道名字
export const update_register_channel = (channelname) => ({
    type: 'update_register_channel',
    channelname,
});

// 添加来自于服务端的报名通道
export const add_register_channel = (channels) => ({
    type: 'add_register_channel',
    channels,
});

// 更新已经存在的channel
export const update_edit_channel = (tid, channelname) => ({
    type: 'update_edit_channel',
    tid,
    channelname,
});