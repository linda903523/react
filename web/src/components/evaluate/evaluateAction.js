import baseUrl from '../../utils/baseUrl.js';

export function Init1(){
    return {
        types: ['BeforeRequest', 'Req1', 'RequestError'],
        url: baseUrl+'goods.php/'
    }
}

