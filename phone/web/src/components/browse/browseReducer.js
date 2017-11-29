export default function BrowseReducer(state = {},action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeList':
            reState.loading = true;
            break;
        case 'browse1':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'browse3':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState;
}