import baseUrl from '../../utils/baseUrl.js';

export function Init1(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequestAll', 'Reqall', 'RequestError'],
        url:baseUrl+'carlist1.php',
        data:{username:username}
    }
}