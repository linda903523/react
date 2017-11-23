import baseUrl from '../../utils/baseUrl.js';

export function Init9(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
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
export function dan(list){
    var goodsid=[];
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    for(var i=0;i<list.length;i++){
        goodsid.push(list[i].id);
    }
    return {
        types: ['BeforeRequest', 'Reqlist2', 'RequestError'],
         url: baseUrl+'status.php',
         data:{
            list:JSON.stringify({
                username:username,
                id:goodsid 
            })
        }
    }
}