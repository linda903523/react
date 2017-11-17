export default function StudentReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest1':
            reState.loading = true;
            break;
        case 'Reqres':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
            reState.dataset = [];
    }
    return reState ;
}