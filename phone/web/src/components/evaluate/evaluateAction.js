import baseUrl from '../../utils/baseUrl.js';

export function Init1(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequest', 'Reqeva', 'RequestError'],
        url: baseUrl+'evaluate.php',
        data:{username:username}
    }
}

