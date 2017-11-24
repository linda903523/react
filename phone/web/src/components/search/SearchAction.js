import baseUrl from '../../utils/baseUrl.js';

export function getHistory(username){
    return {
        types: ['BeforeRequest2', 'Reqsea1', 'RequestError2'],
        url: baseUrl+'history.php',
        data:{username:username}
    }
}

export function clear(clearobj){
    return {
        types: ['BeforeRequest2', 'Reqsea2', 'RequestError3'],
        url: baseUrl+'historychange.php',
        data:clearobj
    }
}
export function add(addobj){
    return {
        types: ['BeforeRequest2', 'Reqsea3', 'RequestError3'],
        url: baseUrl+'historychange.php',
        data:addobj
    }
}