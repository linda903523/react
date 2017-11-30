import baseUrl from '../../utils/baseUrl.js';

export function xiadan(detail,totalprice){
    for (var i=0;i<detail.length;i++){
        detail[i].totalprice = totalprice['totalprice'];
    }
    detail = JSON.stringify(detail)
    return {
        types: ['BeforeRequest', 'Reqlist2', 'RequestError'],
        url: baseUrl+'confirmorder.php',
        data:{order:detail}
    }
}