import baseUrl from '../../utils/baseUrl.js';

export function xc1(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequest', 'Reqship1', 'RequestError'],
        url: baseUrl+'fukuang.php',
        data:{username:username}
    }
}
export function zhifu(shipments){
    var goodsid=[];
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    for(var i=0;i<shipments.length;i++){
        goodsid.push(shipments[i].id);
    }
    return {
        types: ['BeforeRequest', 'Reqship2', 'RequestError'],
         url: baseUrl+'zhifu.php',
         data:{
            shipments:JSON.stringify({
                username:username,
                id:goodsid 
            })
        }
    }
}