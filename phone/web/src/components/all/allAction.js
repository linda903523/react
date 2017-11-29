import baseUrl from '../../utils/baseUrl.js';
import $ from 'jquery';

export function confirm(username){
    return {
        types: ['BeforeRequestAll', 'Reqall', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{username:username}
    }
}
export function order(item,event){
    $(event.target).toggleClass("ccallcolor");
  var username=item[0].username;
  var ordernumber=item[0].ordernumber;
    return {
        types: ['BeforeRequestAll', 'Recc', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{
            username:username,
            ordernumber:ordernumber
        }
    }
}