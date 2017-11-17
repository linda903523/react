export default function DetailReducer(state = {},action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeList':
            reState.loading = true;
            break;
        case 'Listed':
        case 'detailed':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState;
}