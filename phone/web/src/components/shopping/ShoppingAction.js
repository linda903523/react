// 切换导航栏
export function navChange(e){
    var nav = document.getElementsByTagName('nav')[0];
    var lis = nav.firstChild.children;      
    for(var i=0;i<lis.length;i++){
        lis[i].firstChild.style.color = '#bebebe';
    }
    if(e.target.tagName.toLowerCase() == 'a'){
        e.target.style.color = '#ea4f25';
    }
    return {
        type:'navChange'
    }
}