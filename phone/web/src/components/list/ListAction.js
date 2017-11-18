import baseUrl from '../../utils/baseUrl.js';

export function Init(){
    return {
        types:['BeforeRequest1', 'Reqlist', 'RequestError1'],
        url:baseUrl+'goods.php'
        // url:'http://10.3.137.245:80/api/php/sql.php'
    }
}