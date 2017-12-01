export default function SalingGoodsReducer(state = {}, action){
	let reState = JSON.parse(JSON.stringify(state));

	switch(action.type){

		case 'BeforeLogin':

			// reState.loading = true;
			reState.aa = 666;
			reState.loginLoading = true;
			break;

		case 'Logined':
			console.log('login_res', action.dataset);
			reState.loginLoading = false;
			reState.aa = JSON.parse(action.dataset);
			break;
	}
	console.log('loginR', reState)
	return reState;
}