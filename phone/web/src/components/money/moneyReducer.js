export default function list1Reducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        // case 'Reqlist1':
        //     reState.dataset = action.dataset;
        //     break;
        default:
            reState.loading = false;
    }
    return reState ;
}