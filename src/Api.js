import { BASE_URL } from './resources/Constants';

const headers = {
    'Authorization': '',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
const api = {
    login: '/api/login',
};

_get = (url, callback) => {
    fetch(BASE_URL + url, { method: 'GET', headers })
        .then(res => res.json())
        .then(res => callback(res))
        .catch(err => callback(null, err));
};

_post = (url, body, callback) => {
    fetch(BASE_URL + url, { method: 'POST', headers, body: JSON.stringify(body) })
        .then(res => res.json())
        .then(res => callback(res))
        .catch(err => callback(null, err));
};

_multiPart = (url, data, callback) => {
    const multipartHeaders = { ...headers, 'Content-Type': 'multipart/form-data' };
    const body = new FormData();
    for (const key in data) body.append(key, data[key]);
    fetch(BASE_URL + url, { method: 'POST', headers: multipartHeaders, body })
        .then(res => res.json())
        .then(res => { return callback(res) })
        .catch(err => callback(null, err));
};

// Get Requests --------------------------------------------------------------------------------
export const setToken = token => headers.Authorization = token;
export const getExample = callback => _get(api.login, callback);

// Post Requests --------------------------------------------------------------------------------
export const postExample = (body, callback) => _post(api.login, body, callback);
