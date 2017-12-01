
export function getSelectList(api){
	return {
		types: ['BeforeGetSelect', 'GetSelected'],
		url: api,
		data: {
			type: 'getSelect'
		}
	}
}