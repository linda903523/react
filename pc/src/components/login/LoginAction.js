export function loginUser(api, params){
	return {
		types: ["BeforeLogin", "Logined"],
		url: api,
		data: params
	}
}