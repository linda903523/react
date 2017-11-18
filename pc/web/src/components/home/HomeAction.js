import baseUrl from '../../utils/baseUrl.js';

export function aa(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: baseUrl
    }
}

export function bb(){
	return {
		type: 'bb'
	}
}