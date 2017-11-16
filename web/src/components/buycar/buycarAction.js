import baseUrl from '../../utils/baseUrl.js';

export function Init4(){
    return {
        types: ['BeforeRequest', 'Req2', 'RequestError'],
        url:baseUrl+'carlist.php'
    }
}
export function jian(index,id){
    if(document.getElementsByClassName('number')[index].innerHTML>1){
        document.getElementsByClassName('number')[index].innerHTML--;
         return {
            types: ['BeforeRequest', 'Req3', 'RequestError'],
            url: baseUrl+'jian.php/',
            data:{goodsid:id}
        }
    }
}
export function jia(index,id){
    if(document.getElementsByClassName('number')[index].innerHTML>0){
        document.getElementsByClassName('number')[index].innerHTML++;
    }
    return {
        types: ['BeforeRequest', 'Req4', 'RequestError'],
            url: baseUrl+'add.php/',
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
export function jiesuan(){
  console.log(99);
    return {
        types: ['BeforeRequest', 'Req10', 'RequestError'],
            url: baseUrl+'insert.php/',
            data:{
                order:JSON.stringify(
                  [{
                  ordernumber:123456,
                  goodsid:1,
                  username:'徐翠',
                  number:3
                },
                {
                  ordernumber:123333,
                  goodsid:3,
                  username:'徐翠',
                  number:5
                }]
                  )
            }
    }
}