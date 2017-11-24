export default function DetailReducer(state = {},action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeList':
            reState.loading = true;
            break;
        case 'Listed':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'detailed':
            reState.loading = false;
            break;
        default:
            // reState.loading = false;
            // break;
    }
    return reState;
}