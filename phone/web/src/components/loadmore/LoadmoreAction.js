import baseUrl from '../../utils/baseUrl.js';

export function Init(page,qty){
    return {
        types: ['BeforeRequest', 'Reqload', 'RequestError'],
        url: baseUrl+'article.php',
        data:{
            pageNo:page,
            qty:qty
        }
    }
}
