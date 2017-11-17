import baseUrl from '../../utils/baseUrl.js';

export function Init(){
    return {
        types: ['BeforeRequest', 'Reqhome', 'RequestError'],
        url: 'http://localhost:1555/api/football.php',
        
    }
}
