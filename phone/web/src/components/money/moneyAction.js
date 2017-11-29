import baseUrl from '../../utils/baseUrl.js';
import $ from 'jquery';
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
export function money(event){
      // $(event.target).children('i').hasClass(glyphicon glyphicon-ok-sign) ? $(event.target).children('i')[0].className="glyphicon glyphicon-ok-circle" : $(event.target).children('i')[0].className= "glyphicon glyphicon-ok-sign";

   // $(event.target).children('i')[0].className="glyphicon glyphicon-ok-sign";
// if($(event.target).hasClass('moneyli2')){
//     $(".moneyi2").attr("class","glyphicon glyphicon-ok-sign moneyi2");
//    $(".moneyi2").css({"color":"#000"});
//    $(".moneyi").attr("class","glyphicon glyphicon-ok-circle");
//    $(".moneyi").css({"color":"red"});
// }
// else if($(event.target).hasClass('moneyli1')){
//     $(".moneyi").attr("class","glyphicon glyphicon-ok-sign moneyi");
//    $(".moneyi").css({"color":"#eee"});
//    $(".moneyi2").attr("class","glyphicon glyphicon-ok-circle");
//    $(".moneyi2").css({"color":"#000"});
// }
   
   

   
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