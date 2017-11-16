export default function ListReducer(state = {},action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest1':
            reState.loading = true;
            break;
        case 'Requested1':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState;
}