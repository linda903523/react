import baseUrl from '../../utils/baseUrl.js';

export function getHistory(){
    return {
        types: ['BeforeRequest2', 'Requested2', 'RequestError2'],
        url: baseUrl+'history.php'
    }
}

export function clear(clearobj){
    return {
        types: ['BeforeRequest2', 'Requested3', 'RequestError3'],
        url: baseUrl+'historychange.php',
        data:clearobj
    }
}
export function add(addobj){
    return {
        types: ['BeforeRequest2', 'Requested3', 'RequestError3'],
        url: baseUrl+'historychange.php',
        data:addobj
    }
}
