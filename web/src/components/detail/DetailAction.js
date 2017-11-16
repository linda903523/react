import baseUrl from '../../utils/baseUrl.js';

export function Init(params){
    return {
        types:['BeforeList', 'Listed', 'ListError'],
        url:baseUrl+'list.php',
        data:{
            id:params.id.slice(1)
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
    var addType = document.getElementsByClassName('addType')[0];
    addType.innerHTML = '';
    var em = document.createElement('em');
    if(e.target.className.toLowerCase() == 'fl_car'){
        pop.style.display = 'block';
        em.innerHTML = '加入购物车';
        addType.appendChild(em);
    }
    if(e.target.className.toLowerCase() == 'fl_buy'){
        pop.style.display = 'block';
        em.innerHTML = '立即购买';
        em.style.backgroundColor = '#ed5702';
        addType.appendChild(em);
    }
    return {type:'pop'}
}

// 关闭弹窗
export function popNone(){
    var pop = document.getElementById('pop');
    pop.style.display = 'none';
    return {type:'popNone'}
}

var color = ''
var size = '';
var number = '';
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
export function addToCar(idx,id){
    return {
        types:['Beforedetail', 'detailed', 'detailError'],
        url:baseUrl+'carlist.php',
        data:{
            goodsid:id,
            color:color,
            size:size,
            number:number
        }
    }
}