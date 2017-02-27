export const setCookie = (key, value, expires) => {
	if(expires) {
		let date = new Date();
		date.setHours(date.getHours() + expires);
		document.cookie = `${key}=${value};expires=${date.toGMTString()}`;
	} else {
		document.cookie = `${key}=${value}`;
	} 
}

export const getCookie = (key) => {
	let cookie = document.cookie;
	let oCookie = {};
	cookie.split('; ').forEach(item => {
		oCookie[item.split('=')[0]] = item.split('=')[1];
	});
	return oCookie[key];
}

export const delCookie = (key) => {
	setCookie(key, '', -1);
}