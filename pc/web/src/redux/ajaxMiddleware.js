import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            
            const {types, method = "get", url, data} = action;

            if (!url || !method) {
                console.log(65)
                return dispatch(action)
            }

            const [a, b, c] = types;
            middlewareAPI.dispatch({
                type: a
            })
            
            if(url) {
                return new Promise((resolve, reject) => {
                    http[method](url, data).then(response => {
                        middlewareAPI.dispatch({
                            type: b,
                            dataset: response
                        });
                        resolve(response);
                    })                    
                })
            }
        }
    }
}