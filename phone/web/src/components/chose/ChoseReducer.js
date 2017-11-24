export default function ChoseReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'more':
            reState.morestatus = false;
            break;
        case 'less':
            reState.morestatus = true;
            break;        
    }
    return reState ;
}