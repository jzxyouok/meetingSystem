/*
	删除对象中的某一项，删除之后键值自动前移
	对象形如
	{
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	}
	例如删除键为'1'的项之后，对象为
	{
		'0': 1,
		'1': 3,
		'2': 4
	}
	@params obj Object
	@params index Number
*/
export const delItem = (obj, index) => {
	let keys = Object.keys(obj),
		values = Object.values(obj);
	let newKeys = keys.filter(x => x != index);
	let newValues = newKeys.map(x => obj[x]);
	newKeys = newKeys.map(k => {
		if(k < index) {
			return k;
		} else {
			return (k - 1) + '';
		}
	});
	let newObj = {};
	newKeys.forEach((item, index) => newObj[item] = newValues[index]);
	return newObj;
}

// 图片预览时创建URL
export const createUrl = (fileObj) => window.URL.createObjectURL(fileObj);
