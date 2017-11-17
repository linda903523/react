import baseUrl from '../../utils/baseUrl.js';
import $ from 'jquery';

export function Init4(){
    var cookies = document.cookie;
    var username = cookies.slice(8,-1);
    return {
        types: ['BeforeRequest', 'Reqbuy1', 'RequestError'],
        url:baseUrl+'carlist1.php',
        data:{username:username}
    }
}
export function jian(index,id){
    if(document.getElementsByClassName('number')[index].innerHTML>1){
        document.getElementsByClassName('number')[index].innerHTML--;
         return {
            types: ['BeforeRequest', 'Reqbuy2', 'RequestError'],
            url: baseUrl+'jian.php',
            data:{goodsid:id}
        }
    }
}
export function jia(index,id){
    if(document.getElementsByClassName('number')[index].innerHTML>0){
        document.getElementsByClassName('number')[index].innerHTML++;
    }
    return {
        types: ['BeforeRequest', 'Reqbuy3', 'RequestError'],
            url: baseUrl+'add.php',
            data:{goodsid:id}
    }
}
export function liang(e){
  e.target.style.backgroundColor='#000';
   return {
    type:'liang'
   }
}
export function red(e){
  e.target.style.backgroundColor='red';
   return {
    type:'red'
   }
}
export function jiesuan(gather){
    return {
        types: ['BeforeRequest', 'Reqbuy4', 'RequestError'],
            url: baseUrl+'insert.php',
            data:{
              order:JSON.stringify(gather)
            }
    }
}