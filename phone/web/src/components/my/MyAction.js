import baseUrl from '../../utils/baseUrl.js';

var username=''
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

export function browse1(){
    return{
        types:['Beforedetail', 'browse2', 'detailError'],
        url:baseUrl+'browse.php',
        data:{
            username:username,
        }
    }
}