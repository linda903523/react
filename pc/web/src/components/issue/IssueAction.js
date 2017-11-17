export function issueGoods(api, params){
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
		url: api,
		data: {
			type: 'issueGoods',
			data: JSON.stringify(params)
		}
	}
}