import baseUrl from '../../utils/baseUrl.js';

export function Init(){
    return {
        types:['BeforeRequest1', 'Reqlist', 'RequestError1'],
        url:baseUrl+'goods.php'
    }
}

// 切换导航栏
export function navChange(e){
    var nav = document.getElementsByTagName('nav')[0];
    var lis = nav.firstChild.children;
    for(var i=0;i<lis.length;i++){
        lis[i].style.color = '#bebebe';
    }
    if(e.target.tagName.toLowerCase() == 'li'){
        e.target.style.color = '#ea4f25';
    }
    if(e.target.innerText == '推荐'){
        return {
            types:['BeforeRequest1', 'Reqlist', 'RequestError1'],
            url:baseUrl+'goods.php'
        }
    }
    return {
        types:['BeforeListType', 'listType', 'ListTypeError'],
        url:baseUrl+'listType.php',
        data:{
            decorations:e.target.innerText
        }
    }
}