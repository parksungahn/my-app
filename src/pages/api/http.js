import interceptor from './interceptor';

export function getApi(url){
    return interceptor.get(url);
}

export function postApi(url, payload){
    return interceptor.post(url, payload);
}