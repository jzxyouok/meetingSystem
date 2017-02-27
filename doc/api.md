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