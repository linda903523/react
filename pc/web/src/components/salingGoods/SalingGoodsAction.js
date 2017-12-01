const TEST_MODLES = 'TEST_MODLES'//统一由文件引入
export function salingGoodsInit(api, params){
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
		url: api,
		data: params || {
			type: 'getTotal',
			pageNo: 1,
			pageSize: 12
		}
	}
	/*return {
		type:TEST_MODLES,
		payload:val
	}*/
}

