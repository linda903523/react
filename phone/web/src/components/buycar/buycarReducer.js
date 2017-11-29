export default function BuycarReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqbuy1':
            reState.dataset =action.dataset;
            break;
        case 'Reqbuy4':
            // reState.dataset =action.dataset;
            break;
        case 'Reqbuy5':
            reState.dataset =action.dataset;
            break;
        case 'Reqbuy6':
            reState.dataset =action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}