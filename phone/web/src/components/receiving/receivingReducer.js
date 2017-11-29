export default function receivingReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqrece1':
            reState.dataset = action.dataset
            break;
         case 'Reqrece2':
            // reState.dataset = action.dataset
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}