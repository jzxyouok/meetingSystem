export const act_name = (value) => ({
	type: 'act_name',
	value
});

export const act_begin_time = (value) => ({
	type: 'act_begin_time',
	value
})

export const act_end_time = (value) => ({
	type: 'act_end_time',
	value
})

export const act_address = (province, city, detail) => ({
	type: 'act_address',
	province,
	city,
	detail
})

export const act_offical = (value) => ({
	type: 'act_offical',
	value
})

export const add_act_offical = (value) => ({
	type: 'add_act_offical',
	value
})

export const act_category = (value) => ({
	type: 'act_category',
	value
})

export const add_act_category = (value) => ({
	type: 'add_act_category',
	value
})

export const act_poster = (value) => ({
	type: 'act_poster',
	value
})

export const act_details = (value) => ({
	type: 'act_details',
	value
})