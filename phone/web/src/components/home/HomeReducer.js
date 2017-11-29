export default function HomeReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqhome':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}