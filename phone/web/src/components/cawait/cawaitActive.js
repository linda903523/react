import baseUrl from '../../utils/baseUrl.js';

export function Init2(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequest', 'Reqca', 'RequestError'],
        url: baseUrl+'fahuo.php',
        data:{username:username}
    }
}