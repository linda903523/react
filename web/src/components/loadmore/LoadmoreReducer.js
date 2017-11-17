export default function LoadmoreReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Reqload':
            reState.loading = false;
            if(reState.pageNo>action.maxpage){
                return reState;
            }
            if(reState.pageNo>1){
                reState.dataset =reState.dataset.concat(action.dataset);
            }else{
                reState.dataset = action.dataset
            }
            if(reState.pageNo==null){
                 reState.pageNo=2
            }else{
                reState.pageNo +=1;
            }
            
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}