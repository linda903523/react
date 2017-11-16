import baseUrl from '../../utils/baseUrl.js';

export function Init(){
    return {
        types: ['BeforeRequest', 'Requested11', 'RequestError'],
        url: 'http://localhost:1555/api/football.php',
        
    }
}
