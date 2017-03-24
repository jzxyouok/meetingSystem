const toTwo = (num) => {
	return (num+'').length === 1 ? '0'+num : num;
}
/**
 * 获取当前时间
 * 格式为 2017-02-22
 */
export const get_date = () => {
	const date = new Date(),
		  year = date.getFullYear(),
		  month = date.getMonth() + 1,
		  day = date.getDate();
	
	return `${year}-${toTwo(month)}-${toTwo(day)}`;
}

// 将对象转为表单对象
export const serialize = (obj) => {
	let form_data = new FormData();
	for(let key in obj) {
		form_data.append(key, obj[key]);
	}
	return form_data;
}