export default function SalingGoodsReducer(state = {}, action){
	let reState = JSON.parse(JSON.stringify(state));
	
	switch(action.type){

		/*case 'GetSelected':
			if(action.dataset){
				reState.optionList = [];
				JSON.parse(action.dataset).cn.forEach((item, idx) => {
					for(let attr in item){
						reState.optionList.push(item[attr]);
					}
				})
				break;
			}*/
			
	}
	return reState;
}