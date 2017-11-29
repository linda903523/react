import baseUrl from '../../utils/baseUrl.js';

export function changeLogin(){
    return {type: 'login'};
}

export function changeRegister(){
    return {
        type: 'register'
    };
}
export function Sad(username,password){
    return {
        types: ['BeforeRequest', 'Reqlogin', 'RequestError'],
        url: baseUrl+'login.php?username='+username+'&password='+password,
        type: 'get'
        
    }
}