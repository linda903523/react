export default function SalingGoodsReducer(state = {}, action){
	let reState = JSON.parse(JSON.stringify(state));
	
	switch(action.type){

		case 'BeforeRequest':
			reState.loading = true;
			break;

		case 'Requested':
			// console.log(12312)
			reState.loading = false;
			reState.dataset = JSON.parse(action.dataset);
			break;

		/*case 'BeforeDel':
			reState.loading = true;
			break;

		case 'Deled':
			reState.loading = false;
			reState.*/
		
		default:
			reState.loading = false;
	}
	// console.log(reState)
	return reState;
}

/*
	case 'TEST_MODLES' : 
		return 'aaaa'
*/