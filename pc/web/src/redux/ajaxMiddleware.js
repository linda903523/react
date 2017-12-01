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

            /*if(url && !(data.type == 'login')){
                console.log('b', b)
                http[method](url, data).then(response => {
                    middlewareAPI.dispatch({
                        type: b,
                        dataset: response
                    });
                })
            }*/
            

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
/*
            const  [a, b, c] = types;

            middlewareAPI.dispatch({
                type: a
            })*/
        }
    }
}

/*export function bbMiddleware(middlewareAPI){
    return function(dispatch){
        return function(action){
            const { type } = action;

            middlewareAPI.dispatch({
                type: 'bb'
            })
        }
    }
}*/

/*
    export function ajaxMiddleware(middlewareAPI) {
        return function(dispatch){
            return function(action){
                const {types, method = "get", url, data} = action;

                if (!url || !method) {
                    return dispatch(action)
                }
            //    if(!types)
                const [a, b, c] = types;

                middlewareAPI.dispatch({
                    type: a,
                });

                if(url){
                    http[method](url).then(response => {
                        middlewareAPI.dispatch({
                            type: 'Requested',
                            dataset: response
                        });
                    })
                }
            }
        }
    }
*/