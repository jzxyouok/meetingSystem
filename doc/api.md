会议列表接口
请求方式: `GET`
返回数组

```
id 				会议id
title  			标题
state  			会议状态(未发布/已发布/已截止)
image 			会议封面图
EndTime			会议截止时间
RegisterTime 	会议报名时间
address 		会议地址
publisher 		会议发布者
number 			参会人数
```

创建会议接口
请求方式: `POST`

请求参数

```
name                    会议名称
register_begin_time     报名开始时间
register_end_time       报名结束时间
begin_time              会议开始时间
end_time                会议结束时间
category                会议类别
province                省
city                    市
detail_address          详细地址
details                 会议详情
official                会议主办方
poster                  会议海报
```

返回对象

```
code            状态码
message         对应的状态信息
```