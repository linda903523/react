import baseUrl from '../../utils/baseUrl.js';

export function fahuo(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequest', 'Reqrece1', 'RequestError'],
        url: baseUrl+'fahuo.php',
        data:{username:username}
    }
}
export function pingjia(pingjia){
    var goodsid=[];
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    for(var i=0;i<pingjia.length;i++){
        goodsid.push(pingjia[i].id);
    }
    return {
        types: ['BeforeRequest', 'Reqrece2', 'RequestError'],
         url: baseUrl+'pingjia.php',
         data:{
            pingjia:JSON.stringify({
                username:username,
                id:goodsid 
            })
        }
    }
}