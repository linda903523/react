export default function AllReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequestAll':
            reState.loading = true;
            break;
        case 'Reqall':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'Recc':
            reState.dataset = action.dataset;
        default:
            reState.loading = false;
    }
    return reState ;
}