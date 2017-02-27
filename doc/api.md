### 后台

#### 用户登录
接口: `api/login`
请求方式：`POST`
- `code === 1` 表示用户登录成功
- `code === 2` 表示用户登录失败
- `message`    后台返回的信息

```js
{
    code: 1,
    message: '登录成功'
}
```

#### 用户导航栏

```js
[{
    id: 1,
    des: '创建会议',
    isMulti: false,
    icon: 'icon_plus',
    router: '/addNew'
}, {
    id: 2,
    des: '会议管理',
    isMulti: true,
    icon: 'icon_guanli',
    router: '/meetingManager',
    multiContent: [{
        _id: 21,
        des: '基本信息',
        icon: 'icon_jibenxinxi',
        router: '/baseInfo'
    }, {
        _id: 22,
        des: '与会人员',
        icon: 'icon_renyuan',
        router: '/attendees'
    }, {
        _id: 23,
        des: '报名表单',
        icon: 'icon_biaodan',
        router: '/registerForm'
    }, {
        _id: 24,
        des: '会议通知',
        icon: 'icon_tongzhi',
        router: '/notice'
    }, {
        _id: 25,
        des: '会议签到',
        icon: 'icon_qiandao',
        router: '/signIn'
    }, {
        _id: 26,
        des: '后勤安排',
        icon: 'icon_huiyianpai',
        router: '/arrangement'
    }, {
        _id: 27,
        des: '会议设置',
        icon: 'icon_shezhi',
        router: '/setup'
    }, {
        _id: 28,
        des: '会议总结',
        icon: 'icon_zongjie',
        router: '/summarize'
    }]
}, {
    id: 3,
    des: '用户管理',
    isMulti: false,
        icon: 'icon_yonghuguanli',
    router: 'userManager'
}]
```