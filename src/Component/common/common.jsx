import { message } from 'antd';

export const err_alert = (msg) => {
	message.error(msg, 3);
}