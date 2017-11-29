export default function SalingGoodsReducer(state = {}, action){
	let reState = JSON.parse(JSON.stringify(state));

	switch(action.type){
		case 'BeforeLogin':
			reState.aa = 666;
			reState.loginLoading = true;
			break;

		case 'Logined':
			reState.loginLoading = false;
			reState.aa = JSON.parse(action.dataset);
			break;
	}
	return reState;
}