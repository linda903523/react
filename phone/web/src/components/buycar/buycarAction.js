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

export function Init4(){    
    return {
        types: ['BeforeRequest', 'Reqbuy1', 'RequestError'],
        url:baseUrl+'carlist1.php',
        data:{username:username}
    }
}
export function jian(index,id,color,size,username){
    return {
        types: ['BeforeRequest', 'Reqbuy2', 'RequestError'],
        url: baseUrl+'jian.php',
        data:{goodsid:id,color:color,size:size,username:username}
    }
}
export function jia(index,id,color,size,username){
    return {
        types: ['BeforeRequest', 'Reqbuy3', 'RequestError'],
            url: baseUrl+'add.php',
            data:{goodsid:id,color:color,size:size,username:username}
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
export function bianji(e){
    if($(e.target).text()=='完成'){
        $('.shan').removeClass('block');
        $('.shan').addClass('none');
        $('.buyinput').removeClass('none')
        $('.input-buy').removeClass('none')
        $('.buyinput').addClass('block');
        $('.input-buy').addClass('block');
    }else if($(e.target).text()=='编辑'){
        $('.shan').removeClass('none');
        $('.shan').addClass('block');
        $('.buyinput').removeClass('block')
        $('.input-buy').removeClass('block')
        $('.buyinput').addClass('none')
        $('.input-buy').addClass('none')
    }
    e.target.innerHTML= e.target.innerHTML=='编辑' ?'完成' : '编辑';
    return {
        type:'bianji'
    }
}
export function shan(carlist,index,e){
    var carlistshan = carlist[index];
    var carlistshan = Object.assign(carlistshan, {username:username});
    return {
        types: ['BeforeRequest', 'Reqbuy5', 'RequestError'],
        url: baseUrl+'delete.php',
        data:{
            carlistshan:JSON.stringify(carlistshan)
        }
    }
}
export function allshan(){
    return {
        types: ['BeforeRequest', 'Reqbuy6', 'RequestError'],
        url: baseUrl+'delete.php',
        data:{
            username:username
        }
    }
}