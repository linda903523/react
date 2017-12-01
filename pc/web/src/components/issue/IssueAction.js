export function issueGoods(api, params){
	console.log(333, params)
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
		url: api,
		data: {
			type: 'issueGoods',
			data: JSON.stringify(params)
		}
	}
	/*return {
		type:TEST_MODLES,
		payload:val
	}*/
}