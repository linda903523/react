const TEST_MODLES = 'TEST_MODLES'//统一由文件引入
export function dataGridInit(api, params){
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
		url: api,
		data: params || {
			type: 'getTotal',
			pageNo: 1,
			pageSize: 10
		}
	}
}

export function dataGridSearch(api, params){
	return {
		types: ['BeforeSearch', 'Requested', 'RequestError'],
		url: api,
		data: {
			type: params.type,
			searchContent: params.content,
			condition: params.condition,
			pageNo: 1,
			pageSize: 10
		}
	}
}

export function delItem(api, params){
	return {
		types: ['BeforeRequest', 'Requested'],
		url: api,
		data: params
	}
}

export function issueGoods(api){
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
		url: api,
		data: {
			type: 'issueGoods'
		}
	}
}