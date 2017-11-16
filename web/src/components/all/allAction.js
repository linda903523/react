import baseUrl from '../../utils/baseUrl.js';

export function Init1(){
    return {
        types: ['BeforeRequestAll', 'Req6', 'RequestError'],
        url:baseUrl+'goods.php'
    }
}