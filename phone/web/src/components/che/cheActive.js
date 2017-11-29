import baseUrl from '../../utils/baseUrl.js';
var username;
var cookies = document.cookie;
if(cookies.length>0){
    cookies = cookies.split('; ');
    cookies.forEach(function(cookie){
        var temp = cookie.split('=');
        if(temp[0] == 'username'){
            username = temp[1].slice(1,-1);
        }
    })
}
export function carlist1(){
    return {
        types: ['BeforeRequest', 'Reqmy', 'RequestError'],
        url:baseUrl+'carlist1.php',
        data:{username:username}
    }
}
// export function browse1(){
//     var cookies = document.cookie;
//     var username = cookies.slice(8,-1);
//     return{
//         types:['Beforedetail', 'browse2', 'detailError'],
//         url:baseUrl+'browse.php',
//         data:{
//             username:username,
//         }
//     }
// }