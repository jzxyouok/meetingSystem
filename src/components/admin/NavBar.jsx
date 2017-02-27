import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import NavItem from './NavItem';
import styles from '../../scss/admin/admin.scss';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isChildNavShow: false
		}
	}
	handleClick() {
		this.setState({
			isChildNavShow: !this.state.isChildNavShow
		})
	}
	render() {
		const props = [{id:1,des:"创建会议",isMulti:false,icon:"icon_plus",router:"/addNew"},{id:2,des:"会议管理",isMulti:true,icon:"icon_guanli",router:"/meetingManager",multiContent:[{_id:21,des:"基本信息",icon:"icon_jibenxinxi",router:"/baseInfo"},{_id:22,des:"与会人员",icon:"icon_renyuan",router:"/attendees"},{_id:23,des:"报名表单",icon:"icon_biaodan",router:"/registerForm"},{_id:24,des:"会议通知",icon:"icon_tongzhi",router:"/notice"},{_id:25,des:"会议签到",icon:"icon_qiandao",router:"/signIn"},{_id:26,des:"后勤安排",icon:"icon_huiyianpai",router:"/arrangement"},{_id:27,des:"会议设置",icon:"icon_shezhi",router:"/setup"},{_id:28,des:"会议总结",icon:"icon_zongjie",router:"/summarize"}]},{id:3,des:"用户管理",isMulti:false,icon:"icon_yonghuguanli",router:"userManager"}];
		return <div styleName="navbar">
			{
				props.map(item => {
					if(item.isMulti) {
						let childnav = item.multiContent.map(item => {
							return <NavItem
								key={item._id}
								description={item.des}
								iconFront={item.icon}
								href={item.router}
								/>
						});
						return <div key={item.id}>
									<NavItem
									description={item.des}
									iconFront={item.icon}
									iconEnd="icon_sanjiao"
									handleClick={this.handleClick}
									/>
									<div style={{display: this.state.isChildNavShow ? 'block' : 'none'}}>
										{childnav}
									</div>
								</div>
					} else {
						return <NavItem
								key={item.id}
								description={item.des}
								iconFront={item.icon}
								href={item.router}
								/>
					}
				})
			}
			</div>
	}
}

export default CSSModules(NavBar, styles);