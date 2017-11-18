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
}