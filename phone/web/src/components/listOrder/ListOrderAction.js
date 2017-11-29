import baseUrl from '../../utils/baseUrl.js';

export function Init9(){
    var cookies = document.cookie;
    var username;
    if(cookies.length>0){
        cookies = cookies.split('; ');
        cookies.forEach(function(cookie){
            var temp = cookie.split('=');
            if(temp[0] == 'username'){
                username = temp[1].slice(1,-1);
            }
        })
    }
    return {
        types: ['BeforeRequest', 'Reqlist1', 'RequestError'],
         url: baseUrl+'carlistOrder.php',
         data:{username:username}
    }
}
export function Init8(a){
    var price=0;
    for(var i=0;i<a.length;i++){
        price+=a[i].price*a[i].number;
    }
    document.getElementsByClassName('zongjia')[0].innerHTML=price+'元';
    return{
        type:'jiesuan'
    }
}
export function xiadan(detail,totalprice){
    for (var i=0;i<detail.length;i++){
        detail[i].totalprice = totalprice['totalprice'];
    }
    detail = JSON.stringify(detail)
    return {
        types: ['BeforeRequest', 'Reqlist2', 'RequestError'],
        url: baseUrl+'confirmorder.php',
        data:{order:detail}
    }
}