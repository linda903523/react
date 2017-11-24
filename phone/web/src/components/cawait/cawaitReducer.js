export default function CawaitReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqca':
            reState.dataset = action.dataset
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}