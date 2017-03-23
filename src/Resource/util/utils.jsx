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