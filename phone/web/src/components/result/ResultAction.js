import baseUrl from '../../utils/baseUrl.js';

export function search(searchObj){
    return {
        types: ['BeforeRequest1', 'Reqres', 'RequestError1'],
        url: baseUrl+'result.php',
        data:{
            collection:searchObj.key,
            keyword:searchObj.keyword
        }
    }
}

export function clear(){
    return {
        type:'clear'
    }
}