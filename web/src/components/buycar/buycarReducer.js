export default function StudentReducer(state = {}, action){   
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Req2':
            reState.dataset =action.dataset;
            break;
        case 'Req10':
            // reState.dataset =action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}