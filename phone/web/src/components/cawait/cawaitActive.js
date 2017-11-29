import baseUrl from '../../utils/baseUrl.js';

export function  caw(username){
    return {
        types: ['BeforeRequestAll', 'Reqca', 'RequestError'],
        url:baseUrl+'orderlist.php',
        data:{username:username,status:2}
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
export function status1(number){

    var username=number[0].username;
    var ordernumber = number[0].ordernumber;
    var status = number[0].status;
    return {
        types: ['BeforeRequestAll', 'fahuo', 'RequestError'],
        url:baseUrl+'status.php',
        data:{
            username:username,
            ordernumber:ordernumber,
            status:status
        }

    }
}