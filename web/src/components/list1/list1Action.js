import baseUrl from '../../utils/baseUrl.js';

export function Init9(){
    return {
        types: ['BeforeRequest', 'Req9', 'RequestError'],
         url: baseUrl+'carlist.php/'
    }
}