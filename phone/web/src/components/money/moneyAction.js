import baseUrl from '../../utils/baseUrl.js';
import $ from 'jquery';
var username='';
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
export function money(event){
    return {
       type:'money'

    }
}
export function state(number){
    var ordernumber = number[0].ordernumber;
    var status = number[0].status;
    return {
        types: ['BeforeRequestAll', 'money', 'RequestError'],
        url:baseUrl+'status.php',
        data:{
            username:username,
            ordernumber:ordernumber,
            status:status
        }

    }
}