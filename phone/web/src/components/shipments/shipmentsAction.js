import baseUrl from '../../utils/baseUrl.js';

export function ship(username){
    // console.log(username);
    return {
        types: ['BeforeRequestAll', 'shipments', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{username:username,status:1}
    }
}
export function order(item,event){
    $(event.target).toggleClass("ccallcolor");
  var username=item[0].username;
  var ordernumber=item[0].ordernumber;
    return {
        types: ['BeforeRequestAll', 'Recc1', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{
            username:username,
            ordernumber:ordernumber
        }
    }
}