import http from '../utils/httpClient.js';

export function ajaxMiddleware(middlewareAPI){
    return function(dispatch){
        return function(action){
            const {types,method = "get",url,data} = action;

            if(!url || !method){
                return dispatch(action);
            }

            const [type1, type2, type3] = types;

            middlewareAPI.dispatch({
                type:type1
            })
            
            if(url) {
                return new Promise((resolve, reject) => {
                    http[method](url,data).then(response => {
                        middlewareAPI.dispatch({
                            type:type2,
                            dataset: JSON.parse(response).data || JSON.parse(response),
                            maxpage :Math.ceil(JSON.parse(response).total/JSON.parse(response).qty)||null
                        });
                        resolve(response);
                    })                    
                })
            }
        }
    }
}