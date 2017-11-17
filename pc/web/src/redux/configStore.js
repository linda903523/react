import {createStore, applyMiddleware} from 'redux';
import HomeReducer from '../components/home/HomeReducer';
import rootReducer from './rootReducer';
import { 
	ajaxMiddleware,
	bbMiddleware
} from './ajaxMiddleware';

export default function configStore(){
	let middleware = applyMiddleware(ajaxMiddleware);
	const store = createStore(rootReducer, middleware);
	return store;
}