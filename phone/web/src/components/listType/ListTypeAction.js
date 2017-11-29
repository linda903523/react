import baseUrl from '../../utils/baseUrl.js';

export function Init(params){
    return {
        types:['BeforeListType', 'ListType', 'ListTypeError'],
        url:baseUrl+'listType.php',
        data:{
            type:params.type
        }
    }
}