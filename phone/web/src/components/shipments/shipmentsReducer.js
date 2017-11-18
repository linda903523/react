export default function shipmentsReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqship1':
            reState.dataset =action.dataset;
            break;
        case 'Reqship2':
            // reState.dataset =action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}