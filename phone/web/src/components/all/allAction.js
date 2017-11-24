import baseUrl from '../../utils/baseUrl.js';

export function confirm(username){
    return {
        types: ['BeforeRequestAll', 'Reqall', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{username:username}
    }
}