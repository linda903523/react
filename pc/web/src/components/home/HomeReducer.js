export default function HomeReducer(state ={}, action){

	let reState = JSON.parse(JSON.stringify(state));

	switch(action.type){

       case 'BeforeRequest':
         reState.loading = true;
         break;

       case 'Requested':
         reState.loading = false;
         reState.dataset = action.dataset;
         break;

       case 'bb':
			reState.bc += 2;
			console.log(reState.bc);
   }

	return reState;
}

/*
	export default function StudentReducer(state = {}, action){
	    var reState = JSON.parse(JSON.stringify(state));
	    switch(action.type){
	        case 'BeforeRequest':
	            reState.loading = true;
	            break;
	        case 'Requested':
	            reState.loading = false;
	            reState.dataset = action.dataset;
	            break;
	        default:
	            reState.loading = false;
	    }
	    console.log(reState, action);
	    return reState ;
	}
*/