export default function StudentReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Req9':
            reState.dataset = action.dataset;
            break;
        case 'Req10':
            
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}