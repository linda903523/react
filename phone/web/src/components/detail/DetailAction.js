import baseUrl from '../../utils/baseUrl.js';
import {hashHistory} from 'react-router';
import $ from 'jquery';
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
export function Init(params){
    return {
        types:['BeforeList', 'Listed', 'ListError'],
        url:baseUrl+'list.php',
        data:{
            id:params.id
        }
    }
}

// 点击商品信息导航添加样式
export function aChange(e){
    var nav = document.getElementsByClassName('link')[0];
    var lis = nav.children;      
    for(var i=0;i<lis.length;i++){
        lis[i].style.fontWeight = '400';
        lis[i].style.border = 'none';
    }
    if(e.target.tagName.toLowerCase() == 'a'){
        e.target.style.fontWeight = '600';
        e.target.style.borderBottom = '4px solid #000';
    }
    return {type:'aChange'}
}

// 显示弹窗
export function pop(e){
    var pop = document.getElementById('pop');
    var firstlogin = document.getElementsByClassName('firstlogin')[0];
    var addType = document.getElementsByClassName('addType')[0];
    addType.innerHTML = '';
    var em = document.createElement('em');
    if(e.target.className.toLowerCase() == 'fl_car'){
        if(username==undefined){
            firstlogin.style.display = 'block';
            pop.style.display = 'none';
        }
        else{
            firstlogin.style.display = 'none';
            pop.style.display = 'block';
            em.innerHTML = '加入购物车';
            addType.appendChild(em);
        }        
    }
    if(e.target.className.toLowerCase() == 'fl_buy'){
        if(username==undefined){
            firstlogin.style.display = 'block';
            pop.style.display = 'none';
        }
        else{
            pop.style.display = 'block';
            em.innerHTML = '立即购买';
            em.style.backgroundColor = '#ed5702';
            addType.appendChild(em);
        }
        
    }
    return {type:'pop'}
}

// 关闭弹窗
export function popNone(){
    var pop = document.getElementById('pop');
    pop.style.display = 'none';
    return {type:'popNone'}
}

export function cancel(){
    var firstlogin = document.getElementsByClassName('firstlogin')[0];
    firstlogin.style.display = 'none';
    return {type:'cancel'}
}

var color = ''
var size = '';
var number = 1;
// 给选中的颜色和尺寸添加样式
export function choseColor(e){
    var emlist = e.target.parentNode.children;
    for(var i=0;i<emlist.length;i++){
        emlist[i].style.color = '#000';
        emlist[i].style.borderColor = '#000';
    }
    if(e.target.tagName.toLowerCase() == 'em'){
        e.target.style.color = '#ea4f25';
        e.target.style.borderColor = '#ea4f25';
        color = e.target.innerHTML;
    }
    return {
        type:'choseColor'
    }
}
export function choseSize(e){
    var emlist = e.target.parentNode.children;
    for(var i=0;i<emlist.length;i++){
        emlist[i].style.color = '#000';
        emlist[i].style.borderColor = '#000';
    }
    if(e.target.tagName.toLowerCase() == 'em'){
        e.target.style.color = '#ea4f25';
        e.target.style.borderColor = '#ea4f25';
        size = e.target.innerHTML;
    }
    return {
        type:'choseSize'
    }
}

// 商品数量的加与减
export function jian(index){
    var goodsN = document.getElementsByClassName('number')[index];
    if(goodsN.innerHTML>1){
        goodsN.innerHTML--;
        number = goodsN.innerHTML;
        return {type:'jian'}
    }
}
export function jia(index){
    var goodsN = document.getElementsByClassName('number')[index];
    if(goodsN.innerHTML>0){
        goodsN.innerHTML++;
        number = goodsN.innerHTML;
    }
    return {type:'jia'}
}

// 添加到购物车
export function addToCar(idx,id,e){
    var pop = document.getElementById('pop');
    pop.style.display = 'none';

    if(e.target.innerHTML == '加入购物车'){
        clearTimeout(timer);
        var smallPop = document.getElementsByClassName('fl_successAdd')[0]
        smallPop.style.display = 'block';
        var timer = setTimeout(function(){
            smallPop.style.display = 'none';
        },1000)

        return {
            types:['Beforedetail', 'detailed', 'detailError'],
            url:baseUrl+'carlist.php',
            data:{
                goodsid:id,
                color:color,
                size:size,
                number:number,
                username:username
            }
        }
    }

    if(e.target.innerHTML == '立即购买'){
        var array =[]
        var obj = {};
        obj.color = color;
        obj.number = number;
        obj.username = username;
        obj.goodsid = id;
        obj.imgurl = $('._imgsrc').attr('src');
        obj.size = size;
        obj.name = $('._goodsname').html();
        obj.ordernumber = Math.ceil(Math.random()*1000000000);
        var totalprice = ($('._goodsprice').text()*number).toFixed(2);
        array.push(obj)
        hashHistory.push({
            pathname:'listOrder',
            state:array,
            query:{totalprice:totalprice}
        })


        return {type:'lg'}
    }
    
    
}

export function liu(a){
    a=a.id.substring(1);
    var goodsid=a;
    return{
        types:['Beforedetail', 'browse', 'detailError'],
        url:baseUrl+'browse.php',
        data:{
            username:username,
            goodsid:goodsid
        }
    }
}