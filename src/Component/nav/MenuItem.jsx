import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

const MenuItem = Menu.Item;

const menus = [
	{ link: '/meeting-list', icon: 'file-add', text: '会议列表' },
	{ link: '/create-meeting', icon: 'file-text', text: '创建会议' },
	{ link: '/:id/base-info', icon: 'exception', text: '基本信息' },
	{ link: '/:id/register-form', icon: 'schedule', text: '报名表单' },
	{ link: '/:id/attendee', icon: 'user', text: '参会人员' },
	{ link: '/:id/checkin', icon: 'key', text: '会议签到' },
	{ link: '/:id/setting', icon: 'setting', text: '会议设置' },
	{ link: '/:id/support', icon: 'smile', text: '会议后勤' },
	{ link: '/:id/notice', icon: 'notification', text: '会议通知' }
];

const Item = ({key, link, icon, text}) => (
	<MenuItem key={key}>
		<Link to={link}>
			<Icon type={icon} />
			<span className="nav-text">{text}</span>
		</Link>
	</MenuItem>
);

const ListMenu = [];
menus.forEach((item, index) => {
	if(index < 2) {
		ListMenu.push(<Item key={index+1} link={item.link} icon={item.icon} text={item.text} />);
	}
})

const DetailMenu = [];
menus.forEach((item, index) => {
	if(index > 1) {
		DetailMenu.push(<Item key={index+1} link={item.link} icon={item.icon} text={item.text} />);
	}
});

export { ListMenu, DetailMenu };