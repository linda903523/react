import {createStore, applyMiddleware} from 'redux';
import {ajaxMiddleware} from './ajaxMiddleware.js';
import RootReducer from './rootReducer.js';

export default function configStore(){
    let middleware = applyMiddleware(ajaxMiddleware);
    const store = createStore(RootReducer, middleware);
    return store;
}